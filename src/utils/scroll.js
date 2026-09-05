/**
 * Universal Smooth Scroll Helper
 * Reliably scrolls to any section across all browsers, viewports, and iframes.
 * Supports:
 * - Native element.scrollIntoView({ behavior: 'smooth', block: 'start' }) (honors CSS scroll-margin-top)
 * - Multi-target fallback (window, documentElement, document.body)
 * - Automatic retry with backoff if DOM elements are still mounting (e.g. page transition)
 * - History state update without triggering unwanted page jumps
 */
/**
 * Direct Instant / Smooth Scroll To Top Helper
 * Bypasses CSS smooth-scroll restrictions when switching pages so page top (0,0)
 * is immediately restored without delay or being trapped in unmounting layouts.
 */
export function scrollToTopDirectly(smooth = false) {
  const originalScrollBehavior = document.documentElement ? document.documentElement.style.scrollBehavior : ''
  if (!smooth && document.documentElement) {
    document.documentElement.style.scrollBehavior = 'auto'
  }

  const scrollOptions = smooth 
    ? { top: 0, left: 0, behavior: 'smooth' } 
    : { top: 0, left: 0, behavior: 'instant' }

  try {
    window.scrollTo(scrollOptions)
  } catch (e) {
    window.scrollTo(0, 0)
  }

  if (document.documentElement) {
    if (smooth) {
      try {
        document.documentElement.scrollTo(scrollOptions)
      } catch (e) {
        document.documentElement.scrollTop = 0
      }
    } else {
      document.documentElement.scrollTop = 0
    }
  }

  if (document.body) {
    if (smooth) {
      try {
        document.body.scrollTo(scrollOptions)
      } catch (e) {
        document.body.scrollTop = 0
      }
    } else {
      document.body.scrollTop = 0
    }
  }

  if (!smooth && document.documentElement) {
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior
    })
  }
}

export function scrollToSection(id, customOffset = 80) {
  if (!id) return

  const cleanId = id.replace(/^#\/?/, '')

  // Special case: scroll directly to top for hero or empty id
  if (cleanId === 'hero' || cleanId === '') {
    scrollToTopDirectly(false)
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#hero')
    }
    return
  }

  let attempts = 0
  const maxAttempts = 15

  const performScroll = () => {
    const element = document.getElementById(cleanId)

    if (element) {
      // 1. Native scrollIntoView with smooth behavior (automatically respects scroll-margin-top)
      try {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } catch (e) {
        // Continue to coordinate fallback if not supported
      }

      // 2. Coordinate fallback calculation
      const nav = document.getElementById('main-nav')
      const navHeight = nav ? nav.offsetHeight : customOffset
      const rect = element.getBoundingClientRect()
      const currentScrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement?.scrollTop ||
        document.body?.scrollTop ||
        0
      const targetY = Math.max(0, rect.top + currentScrollY - navHeight)

      try {
        window.scrollTo({ top: targetY, behavior: 'smooth' })
      } catch (e) {
        window.scrollTo(0, targetY)
      }

      if (document.documentElement && document.documentElement.scrollTop !== undefined) {
        try {
          document.documentElement.scrollTo({ top: targetY, behavior: 'smooth' })
        } catch (e) {
          document.documentElement.scrollTop = targetY
        }
      }

      if (document.body && document.body.scrollTop !== undefined) {
        try {
          document.body.scrollTo({ top: targetY, behavior: 'smooth' })
        } catch (e) {
          document.body.scrollTop = targetY
        }
      }

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '#' + cleanId)
      }
    } else if (attempts < maxAttempts) {
      attempts++
      setTimeout(performScroll, 50)
    }
  }

  performScroll()
}

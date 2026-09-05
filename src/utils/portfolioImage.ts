/**
 * Utility to provide instant, lightweight SVG previews for portfolio projects.
 * Eliminates missing image 404 network requests, layout shifts, and mobile bandwidth overhead.
 */
import type { PortfolioItem } from '../data/portfolio'

export function getProjectSvgDataUri(project: PortfolioItem): string {
  const bgPalette = ['#0f172a', '#111827', '#1e1b4b', '#172554', '#142a27', '#2e1065', '#241429']
  const bg = bgPalette[project.id % bgPalette.length]
  const cleanTitle = (project.title || '').replace(/[<>&"]/g, '')
  const cleanCategory = (project.category || '').replace(/[<>&"]/g, '')
  const isUiUx = project.type === 'ui-ux'
  const accent = isUiUx ? '#2563eb' : '#e63946'
  const badgeLabel = isUiUx ? 'Studi Kasus UI/UX' : (project.type === 'website' ? 'Web Engineering' : 'Sistem Digital')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
    <defs>
      <linearGradient id="g_${project.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg}"/>
        <stop offset="100%" stop-color="#090a0f"/>
      </linearGradient>
      <pattern id="pat_${project.id}" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)"/>
      </pattern>
    </defs>
    <rect width="640" height="400" fill="url(#g_${project.id})"/>
    <rect width="640" height="400" fill="url(#pat_${project.id})"/>

    <!-- Device / Window Frame -->
    <rect x="40" y="32" width="560" height="336" rx="12" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
    <rect x="40" y="32" width="560" height="38" rx="12" fill="rgba(2, 6, 23, 0.6)"/>
    <circle cx="64" cy="51" r="4" fill="#ef4444"/>
    <circle cx="78" cy="51" r="4" fill="#f59e0b"/>
    <circle cx="92" cy="51" r="4" fill="#10b981"/>
    
    <rect x="116" y="44" width="220" height="14" rx="7" fill="rgba(255,255,255,0.08)"/>

    <!-- Inner Card Preview -->
    <rect x="70" y="100" width="500" height="220" rx="10" fill="rgba(255,255,255,0.03)" stroke="${accent}" stroke-opacity="0.25"/>
    
    <!-- Category Pill -->
    <rect x="235" y="130" width="170" height="26" rx="13" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-opacity="0.5"/>
    <text x="320" y="147" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">
      ${cleanCategory}
    </text>

    <!-- Project Title -->
    <text x="320" y="195" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" text-anchor="middle">
      ${cleanTitle}
    </text>
    
    <!-- Meta details -->
    <text x="320" y="225" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13" text-anchor="middle">
      ${badgeLabel} · MoraCraft Portfolio
    </text>

    <!-- Bottom Action Pill -->
    <rect x="250" y="255" width="140" height="30" rx="15" fill="${accent}"/>
    <text x="320" y="274" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">
      ${isUiUx ? 'Lihat di Behance' : 'Detail Proyek'}
    </text>
  </svg>`

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
}

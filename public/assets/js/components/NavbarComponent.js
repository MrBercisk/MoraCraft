// NavbarComponent.js
const NavbarComponent = {
  name: 'NavbarComponent',
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      const btn = document.getElementById('hamburgerBtn');
      if (btn) {
        btn.setAttribute('aria-expanded', String(this.mobileMenuOpen));
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      const btn = document.getElementById('hamburgerBtn');
      if (btn) {
        btn.setAttribute('aria-expanded', 'false');
      }
    },
  },
  template: `
    <header class="wrapper">
      <nav class="navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark py-3 bg-dark navbar-floating-responsive">
        <div class="container flex-lg-row flex-nowrap align-items-center">
          <div class="navbar-brand w-100">
            <a href="./index.html">
              <img src="./assets/img/logo_moracraftnew.png" srcset="./assets/img/logo_moracraftnew.png 2x" alt="MoraCraft Logo" />
            </a>
          </div>
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div class="offcanvas-header d-lg-none">
              <a href="./index.html"><img src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x" alt="MoraCraft" /></a>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Portfolio</a></li>
              </ul>
              <!-- /.navbar-nav -->
              <div class="d-lg-none mt-auto pt-6 pb-6 order-4">
                <a href="mailto:first.last@email.com" class="link-inverse">info@email.com</a>
                <br /> 00 (123) 456 78 90 <br />
                <nav class="nav social social-white mt-4">
                  <a href="#"><i class="uil uil-twitter"></i></a>
                  <a href="#"><i class="uil uil-facebook-f"></i></a>
                  <a href="#"><i class="uil uil-dribbble"></i></a>
                  <a href="#"><i class="uil uil-instagram"></i></a>
                  <a href="#"><i class="uil uil-youtube"></i></a>
                </nav>
                <!-- /.social -->
              </div>
              <!-- /offcanvas-nav-other -->
            </div>
            <!-- /.offcanvas-body -->
          </div>
          <!-- /.navbar-collapse -->
          <div class="navbar-other w-100 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item d-none d-md-block">
                <a href="./contact.html" class="btn btn-sm btn-danger rounded-pill btn-red">Contact</a>
              </li>
              <li class="nav-item d-lg-none">
                <button
                  type="button"
                  class="hamburger"
                  id="hamburgerBtn"
                  :aria-expanded="mobileMenuOpen.toString()"
                  aria-controls="mobileDropdown"
                  @click="toggleMobileMenu"
                >
                  <span class="hamburger-line"></span>
                  <span class="hamburger-line"></span>
                  <span class="hamburger-line"></span>
                </button>
              </li>
            </ul>
            <!-- /.navbar-nav -->
          </div>
          <!-- /.navbar-other -->
        </div>
        <!-- /.container -->
        <div class="mobile-dropdown" id="mobileDropdown" :class="{ open: mobileMenuOpen }">
          <div class="mobile-menu-inner">
            <a class="mobile-menu-item active" href="#" @click="closeMobileMenu">Menu</a>
            <a class="mobile-menu-item" href="#" @click="closeMobileMenu">About Us</a>
            <a class="mobile-menu-item" href="#" @click="closeMobileMenu">Services</a>
            <a class="mobile-menu-item" href="#" @click="closeMobileMenu">Portfolio</a>
          </div>
          <div class="mobile-menu-footer">
            <button class="mobile-signin">Sign In</button>
          </div>
        </div>
      </nav>
      <!-- /.navbar -->
    </header>
  `,
};

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     MOBILE NAVIGATION
  ========================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

      const isOpen = mainNav.classList.toggle("nav-open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });


    /* Close mobile menu after clicking a link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("nav-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });

  }


  /* =========================================
     CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  ========================================== */

  document.addEventListener("click", function (event) {

    if (!menuToggle || !mainNav) {
      return;
    }

    const clickedInsideNavigation =
      mainNav.contains(event.target);

    const clickedMenuButton =
      menuToggle.contains(event.target);

    if (
      !clickedInsideNavigation &&
      !clickedMenuButton
    ) {

      mainNav.classList.remove("nav-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );
    }

  });


  /* =========================================
     SMOOTH SCROLL FOR INTERNAL LINKS
  ========================================== */

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* =========================================
     HEADER SCROLL EFFECT
  ========================================== */

  const header =
    document.querySelector(".site-header");

  if (header) {

    function updateHeader() {

      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

    }

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

  }


  /* =========================================
     CURRENT YEAR
     
     Allows the footer year to be updated
     automatically if an element uses:
     data-current-year
  ========================================== */

  const yearElements =
    document.querySelectorAll("[data-current-year]");

  yearElements.forEach(function (element) {

    element.textContent =
      new Date().getFullYear();

  });

});
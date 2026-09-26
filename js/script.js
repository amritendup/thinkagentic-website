document.addEventListener("DOMContentLoaded", function () {

  const menuButton =
    document.querySelector(".mobile-menu-button");

  const navigation =
    document.querySelector(".main-nav");


  if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

      const isOpen =
        navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    navigation
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener("click", function () {

          navigation.classList.remove("open");

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        });

      });

  }


  /*
   * Static contact form
   *
   * GitHub Pages does not provide server-side form processing.
   * The form will be connected to a form service later.
   */

  const contactForm =
    document.querySelector("#contact-form");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        alert(
          "Online enquiry submission will be enabled soon. Please contact ThinkAgentic directly for now."
        );

      }
    );

  }

});
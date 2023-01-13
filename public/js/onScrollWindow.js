window.onscroll = function () {
  /* -------------------------------------------------------------------------- */
  /*                             NAVBAR BORDER COLOR                            */
  /* -------------------------------------------------------------------------- */
  // Get navbar container
  const navbarContainer = document.querySelector(
    ".navbar div:first-child" // NextJS uses dynamic class so we target the container with :first-child
  );

  // Check scroll position
  if (navbarContainer) {
    navbarContainer.style.borderBottomWidth = "1px";
    navbarContainer.style.borderBottomStyle = "solid";
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navbarContainer.style.borderBottomColor = "#cccccc";
    } else {
      navbarContainer.style.borderBottomColor = "transparent";
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                            SCROLL TO TOP BUTTON                            */
  /* -------------------------------------------------------------------------- */
  // Get button
  const scrollToTopButton =
    document.getElementsByClassName("scrollToTopButton")[0];

  // Check scroll position
  if (scrollToTopButton) {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      scrollToTopButton.style.display = "block";
      scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
};

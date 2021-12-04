window.onscroll = function () {
  /* -------------------------------------------------------------------------- */
  /*                             HEADER BORDER COLOR                            */
  /* -------------------------------------------------------------------------- */
  // Get header container
  const headerContainer = document.querySelector(
    "header div:first-child" // NextJS uses dynamic class so we target the container with :first-child
  );

  // Check scroll position
  if (headerContainer) {
    headerContainer.style.borderBottomWidth = "1px";
    headerContainer.style.borderBottomStyle = "solid";
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerContainer.style.borderBottomColor = "#cccccc";
    } else {
      headerContainer.style.borderBottomColor = "transparent";
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

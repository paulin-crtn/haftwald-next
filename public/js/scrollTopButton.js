/* -------------------------------------------------------------------------- */
/*                            SCROLL TO TOP BUTTON                            */
/* -------------------------------------------------------------------------- */

window.onscroll = function () {
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

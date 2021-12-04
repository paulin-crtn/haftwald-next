/* -------------------------------------------------------------------------- */
/*                             HEADER BORDER COLOR                            */
/* -------------------------------------------------------------------------- */

window.onscroll = function () {
  // Get header container
  const headerContainer = document.querySelector(
    "header div:first-child" // NextJS uses dynamic class so we target the container with :first-child
  );

  console.log(headerContainer);

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
};

/* -------------------------------------------------------------------------- */
/*                        DISPLAY SCROLL TO TOP BUTTON                        */
/* -------------------------------------------------------------------------- */

// Get the button
const mybutton = document.getElementById("scrollToTopButton");

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

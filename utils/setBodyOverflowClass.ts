export function addBodyOverflowClass() {
  const body = document.querySelector("body");
  if (body) {
    body.classList.add("overflowYHidden");
  }
}

export function removeBodyOverflowClass() {
  const body = document.querySelector("body");
  if (body) {
    body.classList.remove("overflowYHidden");
  }
}

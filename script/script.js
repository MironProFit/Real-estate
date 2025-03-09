document.addEventListener("DOMContentLoaded", () => {
  window.onscroll = () => {
    const header = document.getElementById("header");
    if (window.scrollY > 5) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
});

let prevScroll = window.pageYOffset || document.documentElement.scrollTop;
document.addEventListener("scroll", function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;

  if (scroll > prevScroll) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }

  prevScroll = scroll;
});

let nav = document.querySelector(".navbar");
nav.classList.add("scrolled");
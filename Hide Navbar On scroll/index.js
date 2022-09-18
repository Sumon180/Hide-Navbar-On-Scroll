$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

let navbar = document.querySelector("nav");
let scrollPrevious = window.pageYOffset;
window.onscroll = function () {
  let scrollCurrent = window.pageYOffset;
  if (scrollPrevious > scrollCurrent) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-90px";
  }
  scrollPrevious = scrollCurrent;
};

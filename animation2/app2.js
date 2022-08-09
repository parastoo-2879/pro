let _span = document.querySelectorAll(".hide");
setTimeout(() => {
  for (i = 0; i < _span.length; i++) {
    _span[i].style.transition = i / 2 + 0.25 + "s";
    _span[i].style.transform = " translateY(0%)";
  }
}, 500);

setTimeout(() => {
  document.getElementsByClassName("slider")[0].style.transform =
    "translateY(-100%)";
  document.getElementsByClassName("slider")[0].style.transitionDelay = "2.5s";
  document.getElementsByClassName("slider")[0].style.transition = "2s";
}, 2000);
setTimeout(() => {
  document.getElementsByClassName("intro")[0].style.transform =
    "translateY(-100%)";
  document.getElementsByClassName("intro")[0].style.transitionDelay = "3s";
  document.getElementsByClassName("intro")[0].style.transition = "2s";
}, 2300);

setTimeout(() => {
  document.getElementsByTagName("nav")[0].style.opacity = "1";
  document.getElementsByClassName("big-text")[0].style.opacity = "1";
}, 4000);

document
  .getElementsByTagName("nav")[0]
  .addEventListener("mousemove", (event) => {
    let _m = document.getElementById("mouse");
    if (_m.getAttribute("class") == "mouse2") {
      _m.removeAttribute("class");
    }
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").classList.add("mouse1");
    document.getElementById("mouse").style.top = y + "px";
    document.getElementById("mouse").style.left = x + "px";
  });
document.getElementById("gallery").addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let _m = document.getElementById("mouse");
  if (_m.getAttribute("class") == "mouse1") {
    _m.removeAttribute("class");
  }
  document.getElementById("mouse").classList.add("mouse2");
  document.getElementById("mouse").style.top = y + "px";
  document.getElementById("mouse").style.left = x + "px";
  document.getElementById("bg-two").style.clipPath =
    "polygon(0 0 , " + (x + 50) + "px 0 , " + (x - 50) + "px 100% , 0 100%)";
});
window.addEventListener("mousedown", () => {
  document.getElementById("mouse").style.transform =
    "translate(-50%, -50%)scale(1.5)";
  document.getElementById("mouse").style.background = "#e6bbbbd2";
});
window.addEventListener("mouseup", () => {
  document.getElementById("mouse").style.transform =
    "translate(-50%, -50%)scale(1)";
  document.getElementById("mouse").style.background = "#42adadaf";
});

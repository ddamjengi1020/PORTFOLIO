const headerContainer = document.getElementById("jsHeaderContainer");
const headerContents = document.getElementById("jsHeaderContents");
const li = headerContents.querySelectorAll("li");

const COLOR = "scrollColor";

const headerColor = () => {
  console.log(window.scrollY);
  const SCROLLY = Math.ceil(window.scrollY);
  const a = (SCROLLY > 300) * 1 + (SCROLLY <= 420) * 2;

  switch (a) {
    case 1:
      for (let i = 0; i < li.length; i++) {
        li[i].innerText = "▪";
        li[i].style.color = "rgba(0, 0, 0, 0.637)";
      }
      break;
    case 2:
      li[0].innerText = "About";
      li[1].innerText = "Skills";
      li[2].innerText = "Project";
      li[3].innerText = "Git";
      for (let i = 0; i < li.length; i++) {
        li[i].style.color = "white";
      }
      break;
    default:
      return;
  }
};

//  following floating menu
let num = 0;
const handleWheel = e => {
  const br = document.createElement("br");
  const brAll = headerContents.querySelectorAll("br");
  if (e.deltaY > 1.25) {
    headerContents.append(br);
  } else if (e.deltaY <= 1.25 && e.deltaY >= -1.25) {
    for (let i = 0; i < brAll.length; i++) {
      setTimeout(() => brAll[i].remove(), num);
      num = num + 20;
    }
    num = 0;
  } else if (e.deltaY < -1.25) {
    headerContents.prepend(br);
  }
  headerColor();
};

const init = () => {
  window.addEventListener("wheel", handleWheel);
};

init();

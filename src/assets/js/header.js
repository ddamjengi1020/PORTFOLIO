const headerContainer = document.getElementById("jsHeaderContainer");
const headerContents = document.getElementById("jsHeaderContents");
const li = headerContents.querySelectorAll("li");

const COLOR = "scrollColor";

const headerColor = () => {
  const SCROLLY = window.scrollY;
  const a =
    (SCROLLY < 500) * 1 +
    (SCROLLY >= 500 && SCROLLY < 726) * 2 +
    (SCROLLY > 726 && SCROLLY < 900) * 3;
  switch (a) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      return;
  }
};

const handleWheel = e => {
  if (e.deltaY > 0) {
    headerContainer.style.animation = "scrollEvent 2s linear forwards";
  } else if (e.deltaY === 0) {
    headerContainer.style.animation = "";
  } else if (e.deltaY < 0) {
    headerContainer.style.animation = "scrollEventDefault 2s linear forwards";
  }
};

const init = () => {
  window.addEventListener("wheel", handleWheel);
};

init();

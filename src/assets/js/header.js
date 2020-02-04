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
      if ((li[0].className = COLOR)) {
        li[0].classList.remove(COLOR);
      }
      break;
    case 2:
      li[0].classList.add(COLOR);
      if ((li[1].className = COLOR)) {
        li[1].classList.remove(COLOR);
      }
      break;
    case 3:
      li[0].classList.remove(COLOR);
      li[1].classList.add(COLOR);
      if ((li[2].className = COLOR)) {
        li[2].classList.remove(COLOR);
      }
      break;
    default:
      return;
  }
};

const handleWheel = () => {
  const SCROLLY = window.scrollY;
  if (SCROLLY > 0) {
    headerContainer.style.animation = "scrollEvent 0.2s linear forwards";
    scrollValue = SCROLLY;
    for (let i = 0; i < li.length; i++) {
      li[i].style.animation = "scrollEventFont 0.2s linear forwards";
    }
  } else {
    headerContainer.style.animation = "scrollEventDefault 0.2s linear forwards";
    scrollValue = SCROLLY;
    for (let i = 0; i < li.length; i++) {
      li[i].style.animation = "scrollDefaultFont 0.2s linear forwards";
    }
  }
  headerColor();
};

const init = () => {
  window.addEventListener("scroll", handleWheel);
};

init();

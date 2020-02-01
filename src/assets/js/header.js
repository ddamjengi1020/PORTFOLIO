const headerContainer = document.getElementById("jsHeaderContainer");
const headerContents = document.getElementById("jsHeaderContents");
const li = headerContents.querySelectorAll("li");

// switch 문으로 바꿀 것!
const headerColor = () => {
  if (window.scrollY < 500) {
    if ((li[0].className = "scrollColor")) {
      li[0].classList.remove("scrollColor");
    }
  } else if (window.scrollY >= 500 && window.scrollY < 726) {
    li[0].classList.add("scrollColor");
    if ((li[1].className = "scrollColor")) {
      li[1].classList.remove("scrollColor");
    }
  } else if (window.scrollY > 726 && window.scrollY < 900) {
    li[0].classList.remove("scrollColor");
    li[1].classList.add("scrollColor");
    if ((li[2].className = "scrollColor")) {
      li[2].classList.remove("scrollColor");
    }
  }
};

const handleWheel = () => {
  if (window.scrollY > 490) {
    headerContainer.style.animation = "scrollEvent 0.3s linear forwards";
    scrollValue = window.scrollY;
    for (let i = 0; i < li.length; i++) {
      li[i].style.animation = "scrollEventFont 0.3s linear forwards";
    }
  } else {
    headerContainer.style.animation = "scrollEventDefault 0.3s linear forwards";
    scrollValue = window.scrollY;
    for (let i = 0; i < li.length; i++) {
      li[i].style.animation = "scrollDefaultFont 0.3s linear forwards";
    }
  }
  headerColor();
};

const init = () => {
  window.addEventListener("scroll", handleWheel);
};

init();

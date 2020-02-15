const body = document.querySelector("body");
const headerUl = document.getElementById("jsHeaderContents");
const headerLi = document.querySelectorAll("li");

let leftWS = 10; // 오른쪽 여백
let topWS = 0; // 위쪽 여백
let scrollTop = 280; // 스크롤시 브라우저 위쪽과 떨어지는 거리
let scrollStart = 280; // 스크롤 시작위치
let activateSpeed = 15; //스크롤을 인식하는 딜레이 (숫자가 클수록 느리게 인식)
let scrollSpeed = 10; //스크롤 속도 (클수록 느림)

let timer;

const RefreshStaticMenu = () => {
  let startPoint, endPoint;
  startPoint = parseInt(document.getElementById("STATICMENU").style.top, 10);
  endPoint =
    Math.max(document.documentElement.scrollTop, document.body.scrollTop) +
    scrollTop;
  if (endPoint < topWS) {
    endPoint = topWS;
  }
  if (startPoint != endPoint) {
    scrollAmount = Math.ceil(Math.abs(endPoint - startPoint) / 15);
    document.getElementById("STATICMENU").style.top =
      parseInt(document.getElementById("STATICMENU").style.top, 10) +
      (endPoint < startPoint ? -scrollAmount : scrollAmount) +
      "px";
    refreshTimer = scrollSpeed;
  }
  timer = setTimeout(() => RefreshStaticMenu(), activateSpeed);
};

const InitializeStaticMenu = () => {
  document.getElementById("STATICMENU").style.right = leftWS + "px"; //처음에 오른쪽에 위치. left로 바꿔도.
  document.getElementById("STATICMENU").style.top =
    document.body.scrollTop + scrollStart + "px";
  RefreshStaticMenu();
};

const removeClass = () => {
  for (let i = 0; i < headerLi.length; i++) {
    if (headerLi[i].className === "point") {
      headerLi[i].classList.remove("point");
    }
  }
};

const handleScroll = () => {
  console.log(window.scrollY);
  let scroll = Math.ceil(window.scrollY);
  value =
    (scroll < 250) * 0 +
    (scroll >= 250 && scroll < 870) * 1 +
    (scroll >= 870 && scroll < 1580) * 2 +
    (scroll >= 1580 && scroll < 3285) * 3 +
    (scroll >= 3285) * 4;
  switch (value) {
    case 0:
      removeClass();
      break;
    case 1:
      removeClass();
      headerLi[0].classList.add("point");
      break;
    case 2:
      removeClass();
      headerLi[1].classList.add("point");
      break;
    case 3:
      removeClass();
      headerLi[2].classList.add("point");
      break;
    case 4:
      removeClass();
      headerLi[3].classList.add("point");
      break;
    default:
      break;
  }
};

const scrollMove = value => {
  window.scrollTo({
    top: value,
    behavior: "smooth"
  });
};

const handleScrollMove = e => {
  const event = e.target;
  const target =
    (event === headerLi[0]) * 1 +
    (event === headerLi[1]) * 2 +
    (event === headerLi[2]) * 3 +
    (event === headerLi[3]) * 4;
  switch (target) {
    case 1:
      scrollMove(534);
      break;
    case 2:
      scrollMove(1144);
      break;
    case 3:
      scrollMove(1865);
      break;
    case 4:
      scrollMove(3400);
      break;
    default:
      break;
  }
};

headerLi.forEach(li => {
  li.addEventListener("click", handleScrollMove);
});

window.addEventListener("scroll", handleScroll);
body.onload = InitializeStaticMenu();

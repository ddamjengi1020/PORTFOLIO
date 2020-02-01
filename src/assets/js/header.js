const headerContainer = document.getElementById("jsHeaderContainer");

const handleWheel = event => {
  event.deltaY = 1;
  console.log(event.deltaY);

  if (event.deltaY !== -0) {
    headerContainer.style.animation = "scrollEvent 0.5s ease-in-out forwards";
  } else if (event.deltaY === -0) {
    headerContainer.style.animation =
      "scrollEventDefault 0.5s ease-in-out forwards";
  }
};

const init = () => {
  window.addEventListener("wheel", handleWheel);
};

init();

const aboutVd = document.getElementById("jsAboutVd");

const playVideo = async () => {
  if (Math.ceil(window.scrollY) >= 296) {
    await aboutVd.play();
  } else {
    await aboutVd.pause();
  }
};

window.addEventListener("scroll", playVideo);

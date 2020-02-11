const skillVideo = document.getElementById("jsSkillVd");

const handleVdPlay = () => {
  if (Math.ceil(window.scrollY) >= 1524) {
    skillVideo.play();
  } else {
    skillVideo.pause();
  }
};

window.addEventListener("scroll", handleVdPlay);

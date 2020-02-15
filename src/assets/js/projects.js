const skillVideo = document.getElementById("jsSkillVd");

const handleVdPlay = () => {
  if (Math.ceil(window.scrollY) >= 2760) {
    skillVideo.play();
  } else {
    skillVideo.pause();
  }
};

window.addEventListener("scroll", handleVdPlay);

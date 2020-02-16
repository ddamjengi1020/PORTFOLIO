const topArrow = document.getElementById("jsTopArrow");

const handleMoveTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

topArrow.addEventListener("click", handleMoveTop);

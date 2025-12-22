const btnFooter = document.querySelector("#btn-footer");

btnFooter.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

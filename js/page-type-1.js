const inputSearch = document.querySelector("#search");
const listItems = document.querySelectorAll(".main-courses_list--item");

inputSearch.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  listItems.forEach((item) => {
    const id = item.id;
    if (id.includes(keyword.trim().replaceAll(" ", "-"))) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
});

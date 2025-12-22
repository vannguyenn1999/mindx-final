const LOCAL_HREF_PATH = "http://127.0.0.1:5500/";
const PATH = document.URL;
const avatarUser = document.querySelector("#avatar-user");
const divLogin = document.querySelector(".header-login_btn");
const divHome = document.querySelector("#header-nav_home");

switch (PATH) {
  case `${LOCAL_HREF_PATH}index.html`:
    divHome.style.backgroundColor = "#f5f5f5";
    divHome.style.color = "#ff782d";
    break;

  case `${LOCAL_HREF_PATH}pages/course-type1.html`:
    const divCourse = document.querySelector("#header-nav_course");
    divCourse.style.backgroundColor = "#f5f5f5";
    divCourse.style.color = "#ff782d";
    break;

  case `${LOCAL_HREF_PATH}pages/course-type2.html`:
    const divCourse2 = document.querySelector("#header-nav_course");
    divCourse2.style.backgroundColor = "#f5f5f5";
    divCourse2.style.color = "#ff782d";
    break;

  default:
    divHome.style.backgroundColor = "#f5f5f5";
    divHome.style.color = "#ff782d";
    break;
}

if (localStorage.getItem("login")) {
  // ? Hiển thị avatar khi đã đăng nhập thành công
  avatarUser.style.display = "block";
  divLogin.style.display = "none";
} else {
  avatarUser.style.display = "none";
  divLogin.style.display = "block";
}

avatarUser.onclick = function () {
  const confirmLogout = window.confirm("Bạn có muốn đăng xuất !");
  console.log(confirmLogout);
  if (confirmLogout) {
    avatarUser.style.display = "none";
    divLogin.style.display = "block";
    localStorage.removeItem("login");
    window.location.href = `${LOCAL_HREF_PATH}pages/login.html`;
  }
};

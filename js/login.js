// const LOCAL_HREF = "http://127.0.0.1:5500/";
const LOCAL_HREF = "https://vannguyenn1999.github.io/mindx-final/";

// ? Kiểm tra xem đã đăng nhập chưa , nếu rồi chuyển hướng trang sang trang index
if (localStorage.getItem("login")) {
  window.location.href = `${LOCAL_HREF}index.html`;
}

// ? Nút đăng ký và đăng nhập
const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");

// ? Form Đăng nhập
const userEmail = document.querySelector("#username");
const userPassword = document.querySelector("#password");

// ? Form đăng ký
const userEmailRegister = document.querySelector("#register_email");
const userNameRegister = document.querySelector("#register_username");
const userPasswordRegister = document.querySelector("#register_password");
const userPasswordConfirmRegister = document.querySelector("#confirm_password");

// ? Nút hiển thị mật khẩu
const showPass1 = document.querySelector("#show_pass_1");
const showPass2 = document.querySelector("#show_pass_2");
const showPass3 = document.querySelector("#show_pass_3");

// ? Nút ẩn mật khẩu
const hiddenPass1 = document.querySelector("#hidden_pass_1");
const hiddenPass2 = document.querySelector("#hidden_pass_2");
const hiddenPass3 = document.querySelector("#hidden_pass_3");

let checkPass1 = false;
let checkPass2 = false;
let checkPass3 = false;

hiddenPass1.style.display = "none";
hiddenPass2.style.display = "none";
hiddenPass3.style.display = "none";

// ? Chức năng hiển thị mật khẩu
const changePass = (type) => {
  switch (type) {
    case 1:
      checkPass1 = !checkPass1;
      if (checkPass1) {
        userPassword.type = "text";
        hiddenPass1.style.display = "block";
        showPass1.style.display = "none";
      } else {
        userPassword.type = "password";
        hiddenPass1.style.display = "none";
        showPass1.style.display = "block";
      }
      break;

    case 2:
      checkPass2 = !checkPass2;
      if (checkPass2) {
        userPasswordRegister.type = "text";
        hiddenPass2.style.display = "block";
        showPass2.style.display = "none";
      } else {
        userPasswordRegister.type = "password";
        hiddenPass2.style.display = "none";
        showPass2.style.display = "block";
      }
      break;

    case 3:
      checkPass3 = !checkPass3;
      if (checkPass3) {
        userPasswordConfirmRegister.type = "text";
        hiddenPass3.style.display = "block";
        showPass3.style.display = "none";
      } else {
        userPasswordConfirmRegister.type = "password";
        hiddenPass3.style.display = "none";
        showPass3.style.display = "block";
      }
      break;

    default:
      break;
  }
};

// ? Chức năng đăng ký / đăng nhập
btnLogin.onclick = function () {
  if (userEmail.value.trim() === "") {
    alert("Mời bạn nhập email !");
    return;
  }

  if (userPassword.value.trim() === "") {
    alert("Mời bạn nhập password !");
    return;
  }

  const user_info = JSON.parse(localStorage.getItem("user-info-register"));

  if (user_info == null) {
    alert("Bạn chưa đăng ký tài khoản !");
    return;
  }

  if (
    user_info.some((item) => item.email === userEmail.value.trim()) &&
    user_info.some((item) => item.password === userPassword.value.trim())
  ) {
    alert("Đăng nhập thành công !");
    window.location.href = `${LOCAL_HREF}index.html`;
    localStorage.setItem("login", "true");
  } else {
    alert("Đăng nhập không thành công !");
  }

  console.log(user_info);
};

btnRegister.onclick = function () {
  if (userEmailRegister.value.trim() === "") {
    alert("Mời bạn nhập email !");
    return;
  }

  if (userNameRegister.value.trim() === "") {
    alert("Mời bạn nhập user name !");
    return;
  }

  if (userPasswordRegister.value.trim() === "") {
    alert("Mời bạn nhập password !");
    return;
  }

  if (userPasswordConfirmRegister.value.trim() === "") {
    alert("Mời bạn nhập password confirm !");
    return;
  }

  if (
    userPasswordRegister.value.trim() !==
    userPasswordConfirmRegister.value.trim()
  ) {
    alert("Xác nhận lại mật khẩu không thành công !");
    return;
  }

  const arrUserRegister =
    JSON.parse(localStorage.getItem("user-info-register")) || [];

  if (arrUserRegister.length >= 1) {
    const checkEmailRegister = arrUserRegister.find(
      (item) => item.email == userEmailRegister.value.trim()
    );

    const checkUserRegister = arrUserRegister.find(
      (item) => item.username == userNameRegister.value.trim()
    );
    if (checkEmailRegister) {
      alert("Email này đã được đăng ký");
      return;
    }

    if (checkUserRegister) {
      alert("User này đã được đăng ký");
      return;
    }
  }

  const info = {
    email: userEmailRegister.value.trim(),
    username: userNameRegister.value.trim(),
    password: userPasswordRegister.value.trim(),
  };

  arrUserRegister.push(info);

  localStorage.setItem("user-info-register", JSON.stringify(arrUserRegister));
  alert("Đăng ký thành công");
};

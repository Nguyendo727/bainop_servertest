function cambiar_login() {
  document.querySelector(".cont_forms").className =
    "cont_forms cont_forms_active_login";
  document.querySelector(".cont_form_login").style.display = "block";
  document.querySelector(".cont_form_sign_up").style.opacity = "0";
  setTimeout(function () {
    document.querySelector(".cont_form_login").style.opacity = "1";
  }, 400);
  setTimeout(function () {
    document.querySelector(".cont_form_sign_up").style.display = "none";
  }, 200);
}

function cambiar_sign_up(at) {
  document.querySelector(".cont_forms").className =
    "cont_forms cont_forms_active_sign_up";
  document.querySelector(".cont_form_sign_up").style.display = "block";
  document.querySelector(".cont_form_login").style.opacity = "0";

  setTimeout(function () {
    document.querySelector(".cont_form_sign_up").style.opacity = "1";
  }, 100);

  setTimeout(function () {
    document.querySelector(".cont_form_login").style.display = "none";
  }, 400);
}

function ocultar_login_sign_up() {
  document.querySelector(".cont_forms").className = "cont_forms";
  document.querySelector(".cont_form_sign_up").style.opacity = "0";
  document.querySelector(".cont_form_login").style.opacity = "0";

  setTimeout(function () {
    document.querySelector(".cont_form_sign_up").style.display = "none";
    document.querySelector(".cont_form_login").style.display = "none";
  }, 500);
}

$(".btn_login_site").on("click", () => {
  setTimeout(() => {
    $(".ouputdata").html("");
  }, 3000);
  $(".ouputdata").html("");
  if ($("#login_password").val() == "" && $("#login_username").val() == "") {
    $(".ouputdata").append(`<span>Bạn cần điền username , password</span>`);
  } else if ($("#login_password").val() == "") {
    $(".ouputdata").append(`<span>Bạn cần điền password</span>`);
  } else if ($("#login_username").val() == "") {
    $(".ouputdata").append(`<span>Bạn cần điền username</span>`);
  }
});

$(".btn_login_site").on("click", () => {
  setTimeout(() => {
    $(".ouputdata").html("");
  }, 3000);
  $(".ouputdata").html("");
  if ($("#login_password").val() == "" && $("#login_username").val() == "") {
    $(".ouputdata").append(`<span>Bạn cần điền username , password</span>`);
  } else if ($("#login_password").val() == "") {
    $(".ouputdata").append(`<span>Bạn cần điền password</span>`);
  } else if ($("#login_username").val() == "") {
    $(".ouputdata").append(`<span>Bạn cần điền username</span>`);
  }
});

const elmcehckshow1 = document.querySelector(".show1");
const ipnElement = document.querySelector("#signup_password");
const btnElement = document.querySelector("#btnPassword1");

btnElement.addEventListener("click", togglePassword1);
function togglePassword1() {
  if (elmcehckshow1.getAttribute("class") == "fas fa-eye show1") {
    console.log(75, elmscheckshow2.getAttribute("class"));
    ipnElement.setAttribute("type", "password");
    const iconelements = document.querySelector(".show1");
    iconelements.setAttribute("class", "fas fa-eye-slash show1");
    return;
  }
  if (elmcehckshow1.getAttribute("class") == "fas fa-eye-slash show1") {
    console.log(82, elmscheckshow2.getAttribute("class"));
    ipnElement.setAttribute("type", "text");
    const iconelements = document.querySelector(".show1");
    iconelements.setAttribute("class", "fas fa-eye show1");
    return;
  }
}

const elmscheckshow2 = document.querySelector(".show2");
const ipnElementcomfirm = document.querySelector("#signup_confimpass");
const btnElementcomfirm = document.querySelector("#btnPassword2");

btnElementcomfirm.addEventListener("click", togglePassword2);
function togglePassword2() {
  if (elmscheckshow2.getAttribute("class") == "fas fa-eye show2") {
    console.log(94, elmscheckshow2.getAttribute("class"));
    ipnElementcomfirm.setAttribute("type", "password");
    const iconelements = document.querySelector(".show2");
    iconelements.setAttribute("class", "fas fa-eye-slash show2");
    return;
  }
  if (elmscheckshow2.getAttribute("class") == "fas fa-eye-slash show2") {
    console.log(101, elmscheckshow2.getAttribute("class"));
    ipnElementcomfirm.setAttribute("type", "text");
    const iconelements = document.querySelector(".show2");
    iconelements.setAttribute("class", "fas fa-eye show2");
    return;
  }
}

const elmscheckshowlogin = document.querySelector(".show_login");
const ipnElementcomfirmlogin = document.querySelector("#login_password");
const btnElementcomfirmlogin = document.querySelector("#btnPassword_login");

btnElementcomfirmlogin.addEventListener("click", togglePassword3);
function togglePassword3() {
  console.log(elmscheckshowlogin.getAttribute("class"));
  if (elmscheckshowlogin.getAttribute("class") == "fas fa-eye show_login") {
    console.log(94, elmscheckshow2.getAttribute("class"));
    ipnElementcomfirmlogin.setAttribute("type", "password");
    let iconelements = document.querySelector(".show_login");
    iconelements.setAttribute("class", "fas fa-eye-slash show_login");
    return;
  }
  if (
    elmscheckshowlogin.getAttribute("class") == "fas fa-eye-slash show_login"
  ) {
    ipnElementcomfirmlogin.setAttribute("type", "text");
    let iconelements = document.querySelector(".show_login");
    console.log(iconelements);
    iconelements.setAttribute("class", "fas fa-eye show_login");
    return;
  }
}

function render1(data) {
  $(".ouput").html("");
  const thehtml = `<div class="data_one"><span>` + data + `</span></div>`;
  $(".ouput").append(thehtml);
}

$(".btn_search").on("click", () => {
  $.ajax({
    type: "GET",
    url: "/user",
  })
    .then((result) => {
      let resultinput = $("#ipn_text").val();
      for (let i = 0; i < result.length; i++) {
        if (result[i].username == resultinput) {
          render1(result[i].username);
          return;
        } else {
          const thehtml = `<div class="data_one"><span>Not find data</span></div>`;
          $(".ouput").html("");
          $(".ouput").append(thehtml);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function login() {
  let resultdata = $(".ouputdata1");
  resultdata.html("");
  let dataerror = `<span>bạn cần điền username or password</span>`;
  let datafinish = `<span class='sucesssignup'>Login thành công</span>`;
  let dataerror2 = `<span>sai tài khoản hoặc mật khẩu</span>`;
  try {
    let username = $("#login_username").val();
    let passworddien = $("#login_password").val();

    if (username == "" && passworddien == "") {
      resultdata.append(dataerror);
      await sleep(1000);
      resultdata.html("");
      return;
    }
    const result = await $.ajax({
      type: "GET",
      url: "/user/" + username,
    });
    if (passworddien == result.password) {
      console.log(91, "condition");
      resultdata.append(datafinish);
      await sleep(2000);
      resultdata.html("");
      window.location.href = "/Home";
    } else {
      console.log(95, username, password, result);
      resultdata.append(dataerror2);
      await sleep(1000);
      resultdata.html("");
      return;
    }
  } catch {
    resultdata.append(dataerror2);
    await sleep(1000);
    resultdata.html("");
    return;
  }
}

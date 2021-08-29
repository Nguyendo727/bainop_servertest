function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sigup11() {
  let htmlerrorserver = `<span>Error Server<span>`;
  try {
    let dataresult = $(".messenger");
    dataresult.html("");
    let email = $("#signup_email").val();
    let user = $("#signup_user").val();
    let htmlerror1 = `<span>error data reg sign<span>`;
    let htmlerror2 = `<span>error password and confirm password<span>`;
    let htmlerror3 = `<span>pass phải lớn hơn 8 kí tự<span>`;
    let htmlerror4 = `<span>Username tồn tại<span>`;
    let success = `<span class="sucesssignup">đăng kí thành công<span>`;
    let password = $("#signup_password").val();
    let confimpassword = $("#signup_confimpass").val();
    console.log(confimpassword, password.length, user, email);
    if (email == "" || user == "" || password == "" || confimpassword == "") {
      dataresult.append(htmlerror1);
      await sleep(1000);
      dataresult.html("");
      return;
    }
    if (password != confimpassword) {
      dataresult.append(htmlerror2);
      await sleep(1000);
      dataresult.html("");
      return;
    }
    if (password.length < 8) {
      dataresult.append(htmlerror3);
      await sleep(1000);
      dataresult.html("");
      return;
    } else {
      const result = await $.ajax({
        url: "/user/signup",
        type: "POST",
        data: {
          username: user,
          password: password,
          usermail: email, // cái này bên server bắt là req.body.usermail e đang de la req,body.mail thì bắt sai key r
        },
      });

      if (result.status == 200) {
        console.log(result);
        dataresult.html("");
        dataresult.append(success);
        await sleep(3000);
        dataresult.html("");
        $(".btn_login").click();
        return;
      }
      if (result.status == 400) {
        dataresult.append(htmlerror4);
        await sleep(1000);
        dataresult.html("");
        return;
      }
    }
  } catch (error) {
    console.log(error);
    dataresult.append(htmlerrorserver);
    await sleep(3000);
    dataresult.html("");
    return;
  }
}

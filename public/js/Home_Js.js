$(".btn_modal1").on("click", () => {
  console.log($(document));
  $(".btn_modal1").click(function () {
    $("#myModal1").modal("show");
  });
});

let hieuung = `
<div id="hieuung">
   <span class="sk-circle1 sk-child"></span>
   <span class="sk-circle2 sk-child"></span>
   <span class="sk-circle3 sk-child"></span>
   <span class="sk-circle4 sk-child"></span>
   <span class="sk-circle5 sk-child"></span>
   <span class="sk-circle6 sk-child"></span>
   <span class="sk-circle7 sk-child"></span>
   <span class="sk-circle8 sk-child"></span>
   <span class="sk-circle9 sk-child"></span>
   <span class="sk-circle10 sk-child"></span>
   <span class="sk-circle11 sk-child"></span>
   <span class="sk-circle12 sk-child"></span>
</div>`;

let editdata = ` 
<button type="button" class="btn btn-primary btn_editdata_config" data-toggle="modal" data-target="#myModal"">
    Edit Content
</button>
<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit data</h4>
                <button type="button" class="close" data-dismiss="modal">×</button>
            </div>
            <div class="modal-body">
                            <table>
                                <tr>
                                    <td><label for="">Username </label></td>
                                    <td><input type="text" class="ipn_Username_update"></td>
                                </tr>
                                <tr>
                                    <td><label for="">Password </label></td>
                                    <td><input type="text" class="ipn_Password_update"></td>
                                </tr>
                                <tr>
                                    <td><label for="">Birthday </label></td>
                                    <td><input type="date" class="ipn_Birthday_update"></td>
                                </tr>
                                <tr>
                                    <td><label for="">Address </label></td>
                                    <td><input type="text" class="ipn_Address_update"></td>
                                </tr>
                                <tr>
                                    <td><label for="">PhoneNumber</label></td>
                                    <td><input type="number" class="ipn_PhoneNumber_update"></td>
                                </tr>
                            </table>
                        </div>
            <div class="modal-footer">
                <button type="button" class="btn btn_update_edit" data-dismiss="modal">Update</button>
            </div>
        </div>
    </div>
</div>`;

let deletedata = `<button type="button" class="btn btn-primary btn_delete_data">Delete Data</button>`;
async function render() {
  const data = await $.ajax({
    type: "GET",
    url: "/user",
  });

  if (data) {
    data.map((ele, index) => {
      let div =
        `
          <tr>
              <td>` +
        index +
        `</td>
              <td>${ele.username}</td>
              <td>${ele.password}</td>
              <td>${ele.Birthday}</td>
              <td>${ele.address}</td>
              <td>${ele.NumberPhone}</td>
              <td>` +
        editdata +
        deletedata +
        `</td>
          </tr>
          `;
      $(".table-data").append(div);
      $($(".btn_delete_data")[index]).on("click", () => {
        $.ajax({
          type: "POST",
          url: "/user/removedata",
          data: { username: ele.username },
        })
          .then(() => {
            console.log(100, "delete finish");
          })
          .catch(() => {
            console.log(103, "delete Error");
          });
        $(".table-data").html("");
        render();
      });
      $($(".btn_editdata_config")[index]).on("click", () => {
        $(".ipn_Username_update").val(ele.username);
        $(".ipn_Password_update").val(ele.password);
        $(".ipn_Birthday_update").val(ele.Birthday);
        $(".ipn_Address_update").val(ele.address);
        $(".ipn_PhoneNumber_update").val(ele.NumberPhone);
        $(".btn_update_edit").off("click");
        $(".btn_update_edit").on("click", () => {
          let newdata = {
            username_update: $(".ipn_Username_update").val(),
            password_update: $(".ipn_Password_update").val(),
            Birthday_update: $(".ipn_Birthday_update").val(),
            address_update: $(".ipn_Address_update").val(),
            NumberPhone_update: $(".ipn_PhoneNumber_update").val(),
          };
          $.ajax({
            type: "POST",
            url: "/user/changeprofile",
            data: {
              username: newdata.username_update,
              password: newdata.password_update,
              birthday: newdata.Birthday_update,
              address: newdata.address_update,
              numberphone: newdata.NumberPhone_update,
            },
          })
            .then((data) => {
              console.log(135, data);
            })
            .catch((err) => {
              console.log(138, err);
            });
          setTimeout(() => {
            $(".table-data").html("");
            render();
            $("#myModal").attr("style", "display:none;");
            $("#hieuung").attr("id", "hieuung Hide");
            console.log(161);
          }, 1000);
          $("body").append(hieuung);
        });
      });
    });
  } else {
    console.log("err");
    return datass;
  }
}

render();

function add(params) {
  let newdata = {
    name: $(".ipn_name").val(),
    Age: $(".ipn_age").val(),
    Fullname: $(".ipn_Fullname").val(),
    job: $(".ipn_job").val(),
    address: $(".ipn_Address").val(),
  };
  data.push(newdata);
  setTimeout(() => {
    $(".table-data").html("");
    render();
    $("#myModal1").attr("style", "display:none;");
    $("#myModal1").attr("class", "modal fade");
    $("#hieuung").attr("id", "hieuung Hide");
  }, 1000);
  $("body").append(hieuung);
}

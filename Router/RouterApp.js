const router = require("express").Router();
const UserModel = require("../mongoDB/mongoose_connect");

router.get("/", async (req, res) => {
  try {
    const result = await UserModel.find({});
    if (result) {
      res.json(result);
    } else {
      res.json({ status: "400", mess: "Error data" });
    }
  } catch (error) {
    res.json({ status: "500", mess: "Error server" });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const result = await UserModel.findOne({
      username: req.params.username,
    });
    if (result) {
      res.json(result);
    } else {
      res.json({ status: 400, mess: "không thấy username" });
    }
  } catch (error) {
    res.json({ status: 500, mess: "Lỗi server" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const checkuser = await UserModel.findOne({ username: req.body.username });
    if (checkuser) {
      res.json({ status: "400", mess: "username đã được sử dụng" });
    } else {
      const newuser = await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        usermail: req.body.usermail,
      });
      if (newuser) {
        console.log(newuser);
        res.json({ status: "200", mess: "tạo thành công" });
      }
    }
  } catch (error) {
    res.json({ status: "500", mess: "Lỗi server" });
  }
});
router.post("/changeprofile", async (req, res) => {
  try {
    const newuser = await UserModel.findOneAndUpdate(
      { username: req.body.username },
      {
        password: req.body.password,
        Birthday: req.body.birthday,
        address: req.body.address,
        NumberPhone: req.body.numberphone,
      }
    );
    if (newuser) {
      res.json({ status: 200, mess: "update finish" });
    } else {
      res.json({ status: 400, mess: "error update" });
    }
  } catch (error) {
    res.json({ status: 500, mess: "Lỗi server" });
  }
});

router.post("/removedata", async (req, res) => {
  try {
    console.log(req.params.username);
    const result = await UserModel.deleteOne({ username: req.body.username });
    if (result.deletedCount == 0) {
      res.json({ status: "400", mess: "delete error" });
    }
    if (result.deletedCount == 1) {
      console.log(result);
      res.json({ status: "200", mess: "delete finish" });
    }
  } catch (error) {
    res.json({ status: "500", mess: "Error server" });
  }
});

// router.delete("/delete", async (req, res) => {
//   try {
//     const result = await UserModel.deleteOne({ username: req.params.username });
//     if (result) {
//       res.json({ status: "200", mess: "delete finish" });
//     } else {
//       res.json({ status: "400", mess: "delete error" });
//     }
//   } catch (error) {
//     res.json({ status: "500", mess: "Error server" });
//   }
// });

module.exports = router;

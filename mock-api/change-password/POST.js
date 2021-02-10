module.exports = (req, res) => {
  const data = req.body;
  if (data.newPassword === "Qwerty12") {
    return res.status(201).send({
      message: "Change password success",
    });
  } else {
    return res.status(409).send({
      err: "Server error",
    });
  }
};

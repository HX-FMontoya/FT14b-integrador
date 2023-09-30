const { User } = require("../DB_connection");

async function postUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send({ message: "Faltan datos" });
    const [user, isCreated] = await User.findOrCreate({
      where: {
        email: email,
        password: password,
      },
    });
    res.status(201).send({ user, created: isCreated });
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = postUser;

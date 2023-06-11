const StreamChat = require("stream-chat").StreamChat;
const bcrypt = require("bcrypt");
const { connect } = require("getstream");
require("dotenv").config();
const login = async (req, res) => {
  const api_key = process.env.STREAM_API_KEY;
  const api_secret = process.env.STREAM_API_SECRET;
  const app_id = process.env.STREAM_APP_ID;
  try {
    const { username, password } = req.body;

    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);
    console.log("hi");
    const { users } = await client.queryUsers({ name: username });
    console.log(users);
    if (!users.length) {
      res.json({ message: "USER NOT FOUND" });
    }
    const success = bcrypt.compare(password, users[0].hashedPassword);
    const token = serverClient.createUserToken(users[0].id);
    if (success) {
      res.json({ token, username: users[0].name, userID: users[0].id });
    } else {
      res.json({ message: "INCORRECT PASSWORD" });
    }
  } catch (error) {}
};
module.exports = login;

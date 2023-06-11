const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(api_key);
    const userID = crypto.randomBytes(16).toString("hex");
    console.log(typeof userID);
    const serverClient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken(userID);
    res.status(200).json({ username, userID, hashedPassword, token });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = signup;

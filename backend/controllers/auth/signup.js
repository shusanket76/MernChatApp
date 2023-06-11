const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const serverClient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken()
  } catch (error) {
    console.log(err);
    res.send(error);
  }
};

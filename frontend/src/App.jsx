import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer } from "./components";

const apiKey = "weujx77yat3c";
const client = StreamChat.getInstance(apiKey);
const App = () => {
  return (
    <Chat client={client}>
      <ChannelListContainer />
      <ChannelContainer />
    </Chat>
  );
};

export default App;

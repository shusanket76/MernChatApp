import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer } from "./components";
import Auth from "./components/Auth";
import "stream-chat-react/dist/css/index.css";

const cookies = new Cookies();
const authToken = cookies.get("token");
const apiKey = "weujx77yat3c";
const client = StreamChat.getInstance(apiKey);
if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userID"),
      name: cookies.get("username"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authToken
  );
}
const App = () => {
  const [createType, setCreateType] = useState("");
  const [isCreating, setCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!cookies.get("token")) {
    return (
      <>
        <Auth />
      </>
    );
  }
  return (
    <Chat client={client}>
      <ChannelListContainer
        isCreating={isCreating}
        setCreating={setCreating}
        isEditing={isEditing}
        setEditing={setIsEditing}
        setCreateType={setCreateType}
      />
      <ChannelContainer
        isCreating={isCreating}
        setCreating={setCreating}
        isEditing={isEditing}
        setEditing={setIsEditing}
        createType={createType}
      />
    </Chat>
  );
};

export default App;

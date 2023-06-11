import React from "react";
import { useState } from "react";
import {
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelActionContext,
  useChannelStateContext,
  useChatContext,
  MessageSimple,
} from "stream-chat-react";

export const GiphyContext = React.createContext({});

const ChanneLInner = ({ setEditing }) => {
  const [giphyState, setGiphyState] = useState(false);
  const { sendMessage } = useChannelActionContext();
  const overrideSubmitHandler = (message) => {
    let updatedMessage = {
      attachments: message.attachments,
      mentioned_users: message.mentioned_users,
      parent_id: message.parent?.id,
      parent: message.parent,
      text: message.text,
    };
    if (giphyState) {
      updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
    }
    if (sendMessage) {
      sendMessage(updatedMessage);
      setGiphyState(false);
    }
  };
  return (
    <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
      <Window>
        {/* <TeamChannelHeader/> */}
        <MessageList />
        <MessageInput overrideSubmitHandler={overrideSubmitHandler} />
      </Window>
      <Thread />
    </GiphyContext.Provider>
  );
};

const TeamChannelHeader = ({ setEditing }) => {
  const { channel, watcher_count } = useChannelStateContext();
  const { client } = useChatContext();
  const MessagingHeader = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    const additionalMembers = members.length - 3;
    if (channel.type === "messaging") {
      return (
        <>
          <div>
            {members.map(({ user }, i) => {
              return (
                <div key={i}>
                  <p>
                    {user.name}||{user.id}
                  </p>
                </div>
              );
            })}
            {additionalMembers > 0 && <p>{additionalMembers} and more</p>}
          </div>
        </>
      );
    }
    return (
      <div>
        <p>{channel.data.name}</p>
        <span onClick={() => setEditing(true)}>
          <ChannelInfo />
        </span>
      </div>
    );
  };
  const getWaWatcherText = (watchers) => {
    if (!watchers) {
      return "No User Online";
    }
    if (watchers === 1) {
      return "1 USER ONLINE";
    }
    return `${watchers} USERS ONLINE`;
  };
  return (
    <div>
      <MessagingHeader />
      <div>
        <p>{getWaWatcherText(watcher_count)}</p>
      </div>
    </div>
  );
};

export default ChanneLInner;

import React from "react";
import { Channel, useChatContext, MessageSimple } from "stream-chat-react";
import CreateChannel from "./CreateChannel";
import EditChannel from "./EditChannel";
import TeamMessage from "./TeamMessage";
import ChanneLInner from "./ChanneLInner";

const ChannelContainer = ({
  isCreating,
  setCreating,
  isEditing,
  setEditing,
  createType,
}) => {
  const { channel } = useChatContext();
  if (isCreating) {
    return (
      <CreateChannel createtype={createType} setIsCreating={setCreating} />
    );
  }
  if (isEditing) {
    <EditChannel setIsEditing={setEditing} />;
  }

  const emptyState = () => {
    return (
      <>
        <div>
          <p>THIS IS THE BEGINING OF YOUR CHAT HISTORY</p>
          <p>Send messages,links,emojis,and more</p>
        </div>
      </>
    );
  };
  return (
    <>
      <Channel
        EmptyStateIndicator={emptyState}
        Message={(messageprops, i) => (
          <MessageSimple key={i} {...messageprops} />
        )}
      >
        <ChanneLInner setIsEditing={setEditing} />
      </Channel>
    </>
  );
};

export default ChannelContainer;

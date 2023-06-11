import React from "react";

const TeamChannelPreview = ({ channel, type }) => {
  const ChannelPreview = () => {
    <p>{channel?.data?.name || channel?.data?.id}</p>;
  };
  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    return (
      <>
        <div>name = {members[0]?.user?.username}</div>
        <p>{members[0]?.user?.username}</p>
      </>
    );
  };
  return <>{type === "team" ? <ChannelPreview /> : <DirectPreview />}</>;
};

export default TeamChannelPreview;

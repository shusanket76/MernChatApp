import React from "react";
import { ChannelSearch } from "./";
import { ChannelList } from "stream-chat-react";
// import TeamChannelList from "./TeamChannelList";
import Cookies from "universal-cookie";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const SideBar = ({ logout }) => {
  return (
    <>
      <div>
        <div>
          <div>CHAT APP</div>
        </div>
        <div>
          <div>
            <button onClick={logout}>LOGOUT</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

const ChannelListContainer = () => {
  const cookies = new Cookies();
  const logout = () => {
    cookies.remove("userID");
    cookies.remove("token");
    cookies.remove("username");
    cookies.remove("hashedPassword");
    window.location.reload();
  };
  return (
    <div>
      <SideBar logout={logout} />
      <ChannelSearch />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listprop) => {
          return <TeamChannelList {...listprop} type="team" />;
        }}
        Preview={(previewprops) => {
          return (
            <TeamChannelPreview
              {...previewprops}
              type="team"
            ></TeamChannelPreview>
          );
        }}
      />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listprop) => {
          return <TeamChannelList {...listprop} type="messaging" />;
        }}
        Preview={(previewprops) => {
          return (
            <TeamChannelPreview
              {...previewprops}
              type="messaging"
            ></TeamChannelPreview>
          );
        }}
      />
    </div>
  );
};

export default ChannelListContainer;

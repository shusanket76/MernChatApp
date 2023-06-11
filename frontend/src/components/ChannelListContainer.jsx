import React from "react";
import { ChannelSearch } from "./";
import { ChannelList } from "stream-chat-react";
// import TeamChannelList from "./TeamChannelList";
import Cookies from "universal-cookie";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const SideBar = (
  <div>
    <div>
      <div>CHAT APP</div>
    </div>
    <div>
      <div>
        <button>LOGOUT</button>
      </div>
    </div>
  </div>
);

const ChannelListContainer = () => {
  return (
    <div>
      {SideBar}
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

import React from "react";
import { useState, useEffect } from "react";
import { getChannel, useChatContext } from "stream-chat-react";

const ChannelSearch = () => {
  const [searchVal, setSeachVal] = useState("");
  const [loading, setLoading] = useState(false);
  const getChannel = async (text) => {
    try {
      // TODO:FETCH CHANNELS
    
    } catch (error) {
      setSeachVal("");
    }
  };
  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setSeachVal(e.target.value);
    getChannel(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="SEARCH"
            value={searchVal}
            onChange={(e) => onSearch(e)}
          ></input>
          <div>
            <button>SEARCH</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelSearch;

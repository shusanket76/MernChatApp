import React from "react";

const TeamChannelList = ({ children, error=false, loading, type }) => {
  console.log("hi");
  console.log(children, error, loading, type);
  if (error) {
    return type === "team" ? (
      <div>
        <p>CONNECTION ERROR</p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <>
        <div>
          <p>{type === "team" ? "Channels" : "Messages"}LOADING...</p>
        </div>
        ;
      </>
    );
  }
  return (
    <>
      <div>
        <div>
          <p>{type === "team" ? "Channels" : "Direct Messages"}</p>
        </div>
        {children}
      </div>
    </>
  );
};

export default TeamChannelList;

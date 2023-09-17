import React from "react";

function JoinRoomButton() {
  const onClickJoinRoom = () => {
    console.log("join room button clicked");
  };

  return (
    <button
      className="w-48 brown mx-2 px-2 my-3 background-orange"
      onClick={onClickJoinRoom}
    >
      Join a Room
    </button>
  );
}

export default JoinRoomButton;

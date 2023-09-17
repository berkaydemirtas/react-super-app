import React from "react";

function CreateRoomButtton() {
  const onClickCreateRoom = () => {
    console.log("create room button clicked");
  };

  return (
    <button
      className="w-48 brown mx-2 px-2 my-3 background-orange"
      onClick={onClickCreateRoom}
    >
      Create a New Room
    </button>
  );
}

export default CreateRoomButtton;

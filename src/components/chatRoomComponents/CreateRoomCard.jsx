import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useState, useEffect } from "react";
import chatRoomContext from "../contexts/ChatRoomContext";
import { card_style, card_style_small, button_style } from "./Utils";
import { useNavigate } from "react-router-dom";

function CreateRoomCard() {
  const { webSocket, connected, setNickname, setRoom, refreshContext } =
    useContext(chatRoomContext);

  useEffect(() => {
    refreshContext();
  }, []);

  const [joinFormData, setJoinFormData] = useState({
    roomCode: "",
    nickname: "",
  });

  const [createFormData, setCreateFormData] = useState({
    nickname: "",
  });

  let navigate = useNavigate();

  const handleInputChangeCreate = (e) => {
    const { name, value } = e.target;
    setCreateFormData({
      ...createFormData,
      [name]: value,
    });
  };

  const handleInputChangeJoin = (e) => {
    const { name, value } = e.target;
    setJoinFormData({
      ...joinFormData,
      [name]: value,
    });
  };

  const handleSubmitJoin = (event) => {
    event.preventDefault();
    if (webSocket && connected) {
      webSocket.send(
        JSON.stringify({
          action: "connectRoom",
          nickname: joinFormData.nickname,
          roomCode: joinFormData.roomCode,
        })
      ); // Send the request to the WebSocket server
    } else {
      console.error("WebSocket is not open or not initialized.");
    }
    setNickname(createFormData.nickname);
    setRoom(joinFormData.roomCode);
    navigate("chat", { replace: true });
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();
    if (webSocket && connected) {
      webSocket.send(
        JSON.stringify({
          action: "createRoom",
          nickname: createFormData.nickname,
        })
      ); // Send the request to the WebSocket server
    } else {
      console.error("WebSocket is not open or not initialized.");
    }
    setNickname(createFormData.nickname);
    navigate("chat", { replace: true });
  };

  return (
    <Card style={card_style}>
      <CardContent style={card_style_small}>
        <div className="text-2xl brown">Join to a Room</div>
        <form className="flex flex-col" onSubmit={handleSubmitJoin}>
          <TextField
            label="Nickname"
            name="nickname"
            variant="outlined"
            required={true}
            onChange={handleInputChangeJoin}
          />
          <TextField
            label="Room Code"
            name="roomCode"
            variant="outlined"
            required={true}
            onChange={handleInputChangeJoin}
          />
          <Button
            style={button_style}
            type="submit" // Set the button type to "submit" to trigger form submission
            variant="contained"
            color="primary"
            className="m-6"
          >
            Join
          </Button>
        </form>
      </CardContent>
      <CardContent style={card_style_small}>
        <div className="text-2xl brown">Create a Room</div>
        <form className="flex flex-col" onSubmit={handleSubmitCreate}>
          <TextField
            label="Nickname"
            variant="outlined"
            required={true}
            name="nickname"
            onChange={handleInputChangeCreate}
          />

          <Button
            type="submit" // Set the button type to "submit" to trigger form submission
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateRoomCard;

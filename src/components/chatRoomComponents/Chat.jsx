import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
import chatRoomContext from "../contexts/ChatRoomContext";
import Tooltip from "@mui/material/Tooltip";

const ChatUI = () => {
  const [input, setInput] = React.useState("");

  const { room, nickname, webSocket, connected, messages } =
    useContext(chatRoomContext);

  console.log(room, nickname, webSocket, connected, messages);
  const handleSend = () => {
    if (input.trim() !== "") {
      if (webSocket && connected) {
        webSocket.send(
          JSON.stringify({
            action: "sendMessage",
            message: input,
            nickname: nickname,
            roomCode: room,
          })
        );
      }
      setInput("");
    }
    console.log(messages);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Typography variant="h6" align="center">
          You connected to room: {room}
        </Typography>
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

function stringToColor(str) {
  // Simple hash function to convert the string to a numeric value
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert the numeric value to a color
  const color =
    "#" +
    ((hash & 0x00ffffff) | 0x888888).toString(16).toUpperCase().slice(0, 6);

  return color;
}

const Message = ({ message }) => {
  const { nickname } = useContext(chatRoomContext);
  const color_of_nickname = stringToColor(message.nickname);

  const isOwnMessage = nickname === message.nickname;
  //console.log(message);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isOwnMessage ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isOwnMessage ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Tooltip title={message.nickname} arrow>
          <Avatar style={{ backgroundColor: color_of_nickname }}>
            {message.nickname.slice(0, 3)}
          </Avatar>
        </Tooltip>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isOwnMessage ? 1 : 0,
            mr: isOwnMessage ? 0 : 1,
            backgroundColor: color_of_nickname,
            borderRadius: isOwnMessage
              ? "20px 20px 20px 5px"
              : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.message}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;

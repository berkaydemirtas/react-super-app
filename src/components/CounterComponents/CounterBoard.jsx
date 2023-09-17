import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function CounterBoard() {
  const [count, setCount] = useState(0);

  const card_style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const card_style_small = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    width: "10vh",
  };

  return (
    <Card style={card_style}>
      <Card style={card_style_small} className="background-orange">
        <CardContent>{count}</CardContent>
      </Card>
      <div className="flex flex-col">
        <button
          className="btn w-48 background-green 
        mx-2 px-2 my-2 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn w-48 bg-red-500 
        mx-2 px-2 my-2 rounded-lg"
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </Card>
  );
}

export default CounterBoard;

import React from "react";
import Lot from "../HomeComponents/Lot";
import Counter from "../HomeComponents/Counter";
import ChatRoom from "../HomeComponents/ChatRoom";
import SecretSanta from "../HomeComponents/SecretSanta";

function Home() {
  return (
    <div className="flex flex-col justify-start h-screen">
      <Lot className="text-center m-5" />
      <Counter className="text-center m-5 " />
      <ChatRoom className="text-center m-5 " />
      <SecretSanta className="text-center m-5 " />
    </div>
  );
}

export default Home;

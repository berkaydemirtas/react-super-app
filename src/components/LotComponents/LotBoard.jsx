import React from "react";
import LotParticipants from "./LotParticipants";
import LotResultBoard from "./LotResultBoard";

function LotBoard() {
  return (
    <div className="flex flex-row mx-auto">
      <LotParticipants />
      <LotResultBoard />
    </div>
  );
}

export default LotBoard;

import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function LotResultBoard() {
  const { LotWinners } = useContext(LotDataContext);

  return (
    <div className="w-full h-64 bg-gray-200">
      <p className="text-center text-2xl">Result</p>
      {LotWinners.length > 0 ? (
        <p className="text-center text-4xl brown my-20">
          Winner is {LotWinners}
        </p>
      ) : (
        <div />
      )}
    </div>
  );
}

export default LotResultBoard;

import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function ClearButton() {
  const {
    setLotParticipants,
    setLotParticipantsWeights,
    setLotWinners,
    setWeightsReadyForLot,
    setNamesReadyForLot,
  } = useContext(LotDataContext);

  const resetOnClick = () => {
    setLotParticipants(["Atendant1"]);
    setLotParticipantsWeights([1]);
    setLotWinners([]);
    setWeightsReadyForLot(true);
    setNamesReadyForLot(true);
  };

  return (
    <div className="flex flex-col">
      <button
        className="btn w-48 background-green 
        mx-2 px-2 my-2 rounded-lg"
        onClick={resetOnClick}
      >
        Reset the lot
      </button>
    </div>
  );
}

export default ClearButton;

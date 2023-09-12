import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function DrawLotButton() {
  const {
    LotParticipants,
    LotParticipantsWeights,
    setLotWinners,
    WeightsReadyForLot,
    NamesReadyForLot,
  } = useContext(LotDataContext);

  const onClickDrawLot = () => {
    let totalWeight = 0;
    for (let i = 0; i < LotParticipantsWeights.length; i++) {
      totalWeight += Number(LotParticipantsWeights[i]);
    }
    let randomNumber = Math.random() * totalWeight;
    let partial_sum = 0;
    for (let i = 0; i < LotParticipantsWeights.length; i++) {
      partial_sum += Number(LotParticipantsWeights[i]);
      if (randomNumber <= partial_sum) {
        setLotWinners([LotParticipants[i]]);
        break;
      }
    }
  };

  return (
    <button
      className="btn w-48 background-green 
                    mx-2 px-2 my-2 rounded-lg"
      disabled={WeightsReadyForLot && NamesReadyForLot ? false : true}
      onClick={onClickDrawLot}
    >
      Draw the lot
    </button>
  );
}

export default DrawLotButton;

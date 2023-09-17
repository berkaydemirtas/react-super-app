import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function LotParticipantWeightField() {
  const {
    LotParticipantsWeights,
    setLotParticipantsWeights,
    setWeightsReadyForLot,
  } = useContext(LotDataContext);

  const handleWeightChange = (index, newWeight) => {
    let updatedLotParticipantsWeights = [...LotParticipantsWeights];
    updatedLotParticipantsWeights[index] = newWeight;
    setLotParticipantsWeights(updatedLotParticipantsWeights);
    let counter = 0;
    for (let i = 0; i < updatedLotParticipantsWeights.length; i++) {
      if (Number(updatedLotParticipantsWeights[i]) > 0) {
        counter = 1;
      }
    }
    if (counter === 0) {
      setWeightsReadyForLot(false);
    } else {
      setWeightsReadyForLot(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="brown mx-2">Attendant Weights</div>
      {LotParticipantsWeights.map((value, index) => (
        <input
          className="w-48 brown mx-2 px-2 my-3 background-orange"
          key={index}
          type="number"
          value={value}
          onChange={(e) => {
            handleWeightChange(index, e.target.value);
          }}
        />
      ))}
    </div>
  );
}

export default LotParticipantWeightField;

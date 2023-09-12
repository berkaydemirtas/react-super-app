import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function AddParticipantButton() {
  const {
    LotParticipants,
    LotParticipantsWeights,
    setLotParticipants,
    setLotParticipantsWeights,
    WeightsReadyForLot,
    NamesReadyForLot,
  } = useContext(LotDataContext);

  const addNewParticipant = () => {
    setLotParticipants([
      ...LotParticipants,
      "Attendant" + (LotParticipants.length + 1).toString(),
    ]);
    setLotParticipantsWeights([...LotParticipantsWeights, 1]);
  };
  return (
    <button
      className="btn w-48 background-green 
                mx-2 px-2 my-2 rounded-lg"
      disabled={WeightsReadyForLot && NamesReadyForLot ? false : true}
      onClick={addNewParticipant}
    >
      Add new participant
    </button>
  );
}

export default AddParticipantButton;

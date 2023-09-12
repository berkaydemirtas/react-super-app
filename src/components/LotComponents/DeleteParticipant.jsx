import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function DeleteParticipant() {
  const {
    LotParticipants,
    LotParticipantsWeights,
    setLotParticipants,
    setLotParticipantsWeights,
  } = useContext(LotDataContext);

  const deleteOnClick = (index) => {
    let updatedLotParticipants = [...LotParticipants];
    updatedLotParticipants.splice(index, 1);
    setLotParticipants(updatedLotParticipants);
    let updatedLotParticipantsWeights = [...LotParticipantsWeights];
    updatedLotParticipantsWeights.splice(index, 1);
    setLotParticipantsWeights(updatedLotParticipantsWeights);
  };

  return (
    <div className="flex flex-col">
      <div className="m-3" />
      {LotParticipantsWeights.map((value, index) => (
        <button
          className="btn py-0 brown 
                rounded-full"
          key={index}
          disabled={LotParticipants.length <= 1 ? true : false}
          onClick={(e) => {
            deleteOnClick(index);
          }}
        >
          -
        </button>
      ))}
    </div>
  );
}

export default DeleteParticipant;

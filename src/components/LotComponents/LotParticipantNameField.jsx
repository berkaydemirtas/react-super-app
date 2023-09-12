import React from "react";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function LotParticipantNameField() {
  const { LotParticipants, setLotParticipants, setNamesReadyForLot } =
    useContext(LotDataContext);

  const handleNameChange = (index, participantName) => {
    let updatedValues = [...LotParticipants];
    updatedValues[index] = participantName;
    setLotParticipants(updatedValues);
    let counter = 0;
    for (let i = 0; i < updatedValues.length; i++) {
      if (updatedValues[i] === "") {
        counter++;
        setNamesReadyForLot(false);
      }
    }
    if (counter === 0) {
      setNamesReadyForLot(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="brown mx-2">Attendant Names</div>
      {LotParticipants.map((value, index) => (
        <input
          className="w-48 brown mx-2 px-2 my-3 background-orange"
          key={index}
          type="text"
          required
          value={value}
          onChange={(e) => {
            handleNameChange(index, e.target.value);
          }}
        />
      ))}
    </div>
  );
}

export default LotParticipantNameField;

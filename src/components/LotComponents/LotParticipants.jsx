import React from "react";
import DeleteParticipant from "./DeleteParticipant";
import LotParticipantNameField from "./LotParticipantNameField";
import LotParticipantWeightField from "./LotParticipantWeightField";
import AddParticipantButton from "./AddParticipantButton";
import DrawLotButton from "./DrawLotButton";
import ClearButton from "./ClearButton";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";

function LotParticipants() {
  const { NamesReadyForLot, WeightsReadyForLot } = useContext(LotDataContext);
  return (
    <div className="flex flex-col">
      {NamesReadyForLot ? (
        <div></div>
      ) : (
        <div className="text-red-500 mx-2">
          Attendant names can't be empty !!
        </div>
      )}

      {WeightsReadyForLot ? (
        <div></div>
      ) : (
        <div className="text-red-500 mx-2">Total weight can't be 0 !!</div>
      )}

      <div className="flex flex-row">
        <LotParticipantNameField />
        <LotParticipantWeightField />
        <DeleteParticipant />

        <div className="flex flex-col">
          <div className="m-3" />
          <AddParticipantButton />
          <DrawLotButton />
          <ClearButton />
        </div>
      </div>
    </div>
  );
}

export default LotParticipants;

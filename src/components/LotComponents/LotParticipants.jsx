import React from "react";
import DeleteParticipant from "./DeleteParticipant";
import LotParticipantNameField from "./LotParticipantNameField";
import LotParticipantWeightField from "./LotParticipantWeightField";
import AddParticipantButton from "./AddParticipantButton";
import DrawLotButton from "./DrawLotButton";
import ClearButton from "./ClearButton";
import { useContext } from "react";
import LotDataContext from "../contexts/LotContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function LotParticipants() {
  const { NamesReadyForLot, WeightsReadyForLot } = useContext(LotDataContext);
  return (
    <div className="flex flex-col">
      {NamesReadyForLot ? (
        <div></div>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Atendant name can't be empty — <strong>check it out!</strong>
        </Alert>
      )}

      {WeightsReadyForLot ? (
        <div></div>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Total weight should be more than 0 — <strong>check it out!</strong>
        </Alert>
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

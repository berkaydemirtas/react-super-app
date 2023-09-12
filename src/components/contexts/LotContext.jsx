import { createContext, useState } from "react";

const LotDataContext = createContext();

export const LotDataContextProvider = ({ children }) => {
  const [LotParticipants, setLotParticipants] = useState(["Atendant1"]);
  const [LotParticipantsWeights, setLotParticipantsWeights] = useState([1]);
  const [LotWinners, setLotWinners] = useState([]);
  const [WeightsReadyForLot, setWeightsReadyForLot] = useState(true);
  const [NamesReadyForLot, setNamesReadyForLot] = useState(true);

  return (
    <LotDataContext.Provider
      value={{
        LotParticipants,
        LotParticipantsWeights,
        LotWinners,
        WeightsReadyForLot,
        NamesReadyForLot,
        setLotParticipants,
        setLotParticipantsWeights,
        setLotWinners,
        setWeightsReadyForLot,
        setNamesReadyForLot,
      }}
    >
      {children}
    </LotDataContext.Provider>
  );
};

export default LotDataContext;

import { createContext, useState, useEffect } from "react";
import React from "react";
export let GameContext = createContext();
let updateStorage = (data) => {
  localStorage.setItem("gameDisplay", JSON.stringify(data));
};
let GameContextProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem("gameDisplay")) || [];
  let [type, setType] = useState("");
  let [startDate, setStartDate] = useState(startDate);
  let [endDate, setEndDate] = useState(endDate);
  let [matchLocation, setMatchLocation] = useState(matchLocation);
  let [comments, setComments] = useState(comments);
  let [tournamentName, setTournamentName] = useState(tournamentName);
  let [teamOneLoc, setTeamOneLoc] = useState(teamOneLoc);
  let [teamTwoLoc, setTeamTwoLoc] = useState(teamTwoLoc);
  let [teamOneName, setTeamOneName] = useState(teamOneName);
  let [teamTwoName, setTeamTwoName] = useState(teamTwoName);
  let gameDetails = {
    type,
    startDate,
    endDate,
    matchLocation,
    comments,
    tournamentName,
    teamOneLoc,
    teamTwoLoc,
    teamOneName,
    teamTwoName,
  };
  let [gameDisplay, setGameDisplay] = useState(storage);
  let submitForm = () => {
    console.log(gameDetails);
    setGameDisplay((prev) => [...prev, gameDetails]);
  };
  console.log(gameDisplay);
  useEffect(() => {
    updateStorage(gameDisplay);
  }, [gameDisplay]);
  return (
    <GameContext.Provider
      value={{
        type,
        submitForm,
        setType,
        startDate,
        setComments,
        setEndDate,
        setMatchLocation,
        setStartDate,
        endDate,
        matchLocation,
        tournamentName,
        setTournamentName,
        teamOneLoc,
        setTeamOneLoc,
        teamTwoLoc,
        setTeamTwoLoc,
        teamOneName,
        setTeamOneName,
        teamTwoName,
        setTeamTwoName,
        gameDisplay,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;

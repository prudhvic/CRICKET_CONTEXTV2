import React, { useState, useContext } from "react";
import Select from "react-select";
import { GameContext } from "../context";

const options = [
  { value: "Home", label: "Home" },
  { value: "Away", label: "Away" },
];
const Teams = () => {
  let {
    submitForm,
    teamOneLoc,
    teamTwoLoc,
    setTeamOneLoc,
    setTeamTwoLoc,
    teamOneName,
    teamTwoName,
    setTeamOneName,
    setTeamTwoName,
  } = useContext(GameContext);

  return (
    <div className="container container-flex">
      <div className="form">
        <div className="form-control">
          <input
            type="text"
            placeholder="Team 1 Name"
            value={teamOneName}
            onChange={(e) => setTeamOneName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <Select
            options={options}
            value={teamOneLoc}
            onChange={setTeamOneLoc}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Team 2 Name"
            value={teamTwoName}
            onChange={(e) => setTeamTwoName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <Select
            options={options}
            value={teamTwoLoc}
            onChange={setTeamTwoLoc}
          />
        </div>
      </div>
      <button onClick={submitForm}>submit</button>
    </div>
  );
};

export default Teams;

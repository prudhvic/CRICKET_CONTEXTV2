import React, { useContext, useState } from "react";
import Select from "react-select";
import { GameContext } from "../context";
const options = [
  { value: "Friendly", label: "Friendly" },
  { value: "Tournament", label: "Tournament" },
];
const Type = () => {
  let { type, setType } = useContext(GameContext);
  return (
    <div className="container">
      <div>
        <Select options={options} value={type} onChange={setType} />
      </div>
    </div>
  );
};

export default Type;

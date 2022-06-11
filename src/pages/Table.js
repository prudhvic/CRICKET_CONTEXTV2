import React, { useContext } from "react";
import { GameContext } from "../context";

const Table = () => {
  let { gameDisplay } = useContext(GameContext);
  return (
    <div className="scroll-table">
      {gameDisplay !== [] && (
        <table>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Match Type</th>
            <th>Tournament</th>
            <th>startDate & Time</th>
            <th>EndDate & Time</th>
            <th>Location</th>
            <th>Comments</th>
          </tr>
          {gameDisplay &&
            gameDisplay.map((data) => (
              <tr key={data.comments}>
                <td>
                  {data.teamOneName}({data.teamOneLoc.value})
                </td>
                <td>
                  {data.teamTwoName}({data.teamTwoLoc.value})
                </td>
                <td>{data.type.value}</td>
                <td>{data.tournamentName ? data.tournamentName : "-"}</td>
                <td>{new Date(data.startDate).toDateString()}</td>
                <td>{new Date(data.endDate).toDateString()}</td>
                <td>{data.matchLocation}</td>
                <td>{data.comments}</td>
              </tr>
            ))}
        </table>
      )}
    </div>
  );
};

export default Table;

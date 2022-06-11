import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { GameContext } from "../context";
const General = () => {
  let {
    startDate,
    endDate,
    setComments,
    setStartDate,
    comments,
    type,
    setEndDate,
    setMatchLocation,
    matchLocation,
    tournamentName,
    setTournamentName,
  } = useContext(GameContext);
  return (
    <div className="container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <DatePicker
            placeholderText="start Date & Time"
            selected={startDate}
            showMonthDropdown
            peekNextMonth
            dropdownMode="select"
            showYearDropdown
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-control">
          <DatePicker
            placeholderText="End Date & Time"
            selected={endDate}
            showMonthDropdown
            peekNextMonth
            dropdownMode="select"
            showYearDropdown
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Match Loaction"
            value={matchLocation}
            onChange={(e) => setMatchLocation(e.target.value)}
          />
        </div>
        <div className="form-control">
          <textarea
            placeholder="comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          >
            {comments}
          </textarea>
        </div>
        {type.value === "Tournament" && (
          <div className="form-control">
            <input
              type="text"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              placeholder="Tournament name"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default General;

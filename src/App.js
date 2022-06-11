import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Type from "./pages/Type";
import General from "./pages/General";
import Teams from "./pages/Teams";
import StepZilla from "react-stepzilla";
import Table from "./pages/Table";

function App() {
  let steps = [
    {
      name: "Type",
      component: <Type />,
    },
    {
      name: "General",
      component: <General />,
    },
    {
      name: "Teams",
      component: <Teams />,
    },
  ];
  return (
    <div className="App">
      <h1>Cricket Contest</h1>
      <div className="flex-1">
        <div className="container">
          <StepZilla steps={steps} showSteps={true} stepsNavigation={true} />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;

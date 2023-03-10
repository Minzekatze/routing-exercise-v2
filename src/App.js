import Instructions from "./Instructions";
import "./styles.scss";
import { getStudents } from "./services/students";
import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Results from "./services/Results";
import Home from "./services/Home";

const App = () => {
  const [myStudents, setMyStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => {
      setMyStudents(response);
      console.log(myStudents);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <NavLink
          className="link"
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "white", fontWeight: "bold" } : {};
          }}
        >
          Students
        </NavLink>
      </nav>

      <div className="Instructions">
        <div className="block">
          <h3>Lovely students</h3>
          <Routes>
            <Route path="/" element={<Home myStudents={myStudents} />} />
            <Route path="/students/:id" element={<Results />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;

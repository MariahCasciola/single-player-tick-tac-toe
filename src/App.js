import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./Board";
import Header from "./Header";
import SuperBoard from "./SuperBoard";

function App() {
  const boardTypes = ["medium, super"];

  // Click easy or medium or super button
  const [currentType, setCurrentType] = useState("");

  return (
    <Router>
      <div>
        <Routes>
          {/* super*/}
          <Route path="/super" element={<SuperBoard />}></Route>
          {/*medium*/}
          <Route path="/medium" element={<Board />}></Route>
          {/* easy */}
          <Route path="/easy"></Route>
          {/*Home Page*/}
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./Board";
import Header from "./Header";
import SuperBoard from "./SuperBoard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* super*/}
          <Route path="/super" element={<SuperBoard />}></Route>
          {/*medium*/}
          <Route
            path="/medium"
            element={
              <main>
                <Board />
              </main>
            }
          ></Route>
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

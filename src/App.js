import "./App.css";
import Board from "./Board";
import Yarn from "./Yarn";

function App() {
  return (
    <>
      <header>
        <h1 id="title" className="center">
          Tic-Tac-Toe
        </h1>
      </header>
      <main>
        <Board />
      </main>
    </>
  );
}

export default App;

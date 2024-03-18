import { cleanup, fireEvent, render } from "@testing-library/react";
import Board from "../Board";
import Cell from "../Cell";

describe(Board, () => {

  //render: get and query
  it("Cells array is initially empty when Board renders", () => {
    const {get}=render(<Board/>)
  });



});

it("", () => {
  //
});

it("", () => {
  //
});

it("When a user clicks a cell, it is 'X'", () => {
  //
});

it("When a user clicks a cell, the CPU places an 'O' in an empty cell", () => {
  //
});

it("Clicking restart clears the board state", () => {
  //
});

it("When a player wins 'Hoho, three in a row! (winner: X) Wins!' renders on the page", () => {
  //
});

it("When no one is a winner 'Meow! It's a cat game!' renders on the screen", () => {
  //
});

it("When no one is a winner Cat animation renders on the screen", () => {
  //
});

it("", () => {
  //
});

it("", () => {
  //
});

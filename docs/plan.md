# Plans and Ideas

## Breaking down logic

+ Page loading chooses if the player is "X" or "O".

+ Program will place an letter in a random blank spot.

+ Program waits for single-player to make a move.

+ Check for win conditions.

+ There are 8 combinations for three in a row.

+ Check for lose conditions, such as no three in a row.

+ All 9 spots have been filled without three in a row.

## CPU Tic Tac Toe Stragies

+ Start in a corner, unless the player takes that corner.

+ If all the corners are taken, take position 4 at the center.

+ Check to see if the player wins next turn while on CPUs turn.

## Completed Tasks

+ Pressing start will choose who is "X" and "O" at random.

+ The program plays against a human player by placing "X" or "O" at random.

+ Cells are disabled after a win or a cat game.

+ Change START to RESTART, so the user can play as soon as the webapp loads and triggers a board clear with RESTART.

+ Program will place it's piece in the available corners, or the center, if those cells are occupied, it will place it's piece at random.

## Pending Tasks

+ Write tests.

+ Program should not take their turn if the player wins.

+ X must go first instead of player going first every game.

+ Program should implement winningConditions function in it's turn.

+ Create a better grid for the cells.

+ Create hover effect for player's next move.

+ Optional, but very desired: Render a little cat when there is a cat game.

+ Optional, render a coin toss when clicking start.

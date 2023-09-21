# Plans and Ideas

## Breaking down logic

+ Program waits for player to make the first move.

+ Check for win conditions.

+ Check for lose conditions.

+ There are 8 way to get three in a row.

+ Check for ways to win, and ways to block the player.

## CPU Tic-Tac-Toe Stragies

+ Start in a corner, unless the player takes that corner.

+ Take the center if it is available.

+ Place in another corner (player will have no choice but to stop you from winning).

+ Check for program winning conditions first.

+ Check to see if the player wins next turn while on programs turn.

+ Block the player from winning.

## Completed Tasks

+ Player can play as soon as the web page loads.

+ Program should not take their turn if the player wins.

+ Program blocks the player, wins the game, or forces a cat game.

+ If the center is empty the program will place an "O".

+ The program will place "O" at a random empty corner cell.

+ The program will place "O" at a random empty cell.

+ Cells are disabled for a user to click after a win or a cat game.

+ Program will place it's piece in the available corners, or the center, if those cells are occupied, it will place it's piece at random.

+ Design a more appealing UI.

+ Render a little cat when there is a cat game.

+ Write a more descriptive README.md

+ Make threeInARow into a helper function that returns the data so code can be more dry.

+ Solve bug that says "You are "O". Solution: when a player wins set xIsNext to true.

+ Make font of "X" and "O" bigger.

## Future Developement

+ Make sure lines of grid do not move when a program or player gets three in a row, or ties.

+ Write tests.

+ Opt for the CPU to go first sometimes instead of player going first every game.

+ Loading page will choose who is "X" and "O" at random.

+ Whoever is "X" will go first.

+ Create hover effect for player's next move.

+ Render a coin toss when clicking start.

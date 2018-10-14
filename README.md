# Conway's Game of Life
Game of life front end web app built in week 10 of Makers. 

<img width="610" alt="screen shot 2018-10-14 at 15 09 10" src="https://user-images.githubusercontent.com/39119623/46917845-3d5ede80-cfc3-11e8-82b7-c3ed7e4162b3.png">

Keywords: React, Javasript, Cypress, TDD

## Background

The Game of life is a zero player game developed in the 70s by John Horton Conway. Check out the [wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). 

I undertook this project to test my TDD process, logical programming and also to continue my own learning with React.

### The Brief

The rules are as follows:

* The game evolves in turns, commonly known as 'ticks'.
* All changes occur at the same time.
* Any live cell with 2 or 3 live neighbours survives until next tick.
* Any live cell with less than 2 live neighbours dies (underpopulation).
* Any live cell with more than 3 live neighbours dies (overpopulation).
* Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).

Write code that is capable of calculating each new generation, given a starter board. Although you don't have to build a visualisation tool to be able to see the evolution, it should be easy to extend the program to add on a web or command line ui.

## How to Use
Clone this repo:
```
git clone https://github.com/joshnickson/game-of-life.git
```

Install dependencies:
```
npm install
```
Run the app locally on your machine:
```
npm start OR yarn start
```

## Testing
The game was built test-first using Cypress for end-to-end testing.

Open up the testing suite with: 
```
yarn cypress:open
```

I used the following user stories as a guide for the feature tests:

### User Stories
```
As a player of games
So that I can I marvel in the wonder that is game of life
I want to be able to load the webpage and see a grid

As a player
So that I can set the initial game configuration
I want to be able to click on a cell to change its state

As a player
So that I can see the game evolve
I want to be able to click a button that updates the grid
```

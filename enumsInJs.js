const Game_Stats = Object.freeze({
  NOT_STARTED: "Not Started",
  PLAYING: "Playing",
  FINISHED: "finished",
});

console.log(Game_Stats);

let gameState = Game_Stats.NOT_STARTED;
gameState = Game_Stats.PLAYING;
gameState = Game_Stats.FINISHED;
console.log(gameState)


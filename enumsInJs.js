/* 
javaScript doesn't have a built-in enums but we can create them
*/

const GameStats = Object.freeze({
  NOT_STARTED: "Not Started",
  PLAYING: "Playing",
  FINISHED: "finished",
});

console.log(GameStats.NOT_STARTED);
console.log(GameStats.PLAYING);
console.log(GameStats.FINISHED);
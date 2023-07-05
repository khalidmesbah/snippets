/* 
- process events: The Process module contains the ability to perform tasks immediately before the process exits, and when it exits. beforeExit allows for asynchronous calls which can make the process continue whereas exit only happens once all synchronous and asynchronous code is complete.
- process.env gives you access to the environment information of your Node.js application.
- process.stdout: doesn't force a new line break
    => process.stdout.write('Hello, world.\n') === console.log('Hello, world.'); 
- process.argv: an array of all arguments supplied to the node process or An array containing your console arguments information for your executed process.
- process.nextTick: Allows you to run JavaScript between the different phases of the event loop.

*/

// create conditions for exit code options
// example: 0 typically implies without errors, 1 with.

process.exitCode = 0;

process.on("beforeExit", () => {
  process.stdout.write("beforeExit event\n");
});

process.on("exit", (code) => {
  process.stdout.write(`exit event with code: ${code}\n`);
});

process.stdout.write("khaled the king\n");
process.stdout.write(process.argv + "\n");
setTimeout(() => {
  process.stdout.write("after the setTimeout()\n");
}, 5000);

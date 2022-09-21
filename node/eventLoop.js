/* 
+ the six phases of node.js event loop
    - Timers: executes callbacks using timers. If there are timers set to 0 ms or setImmediate(), they will run here. Incomplete timers will run in later iterations of the loop.
    - Pending: internal phase
    - Idle/Prepare: internal phase
    - Poll: process I/O callbacks
    - Check: execute any setImmediate() timers added in the Poll phase
    - Close: loop continues if there are more timers or I/O calls. If all timers and I/O calls are done, the loop closes and the process ends.
+ process.nextTick(); will always run at the end of whichever phase is called and before the next phase.
+ diagram
        ┌───────────────────────────┐
    ┌─>│           timers          │
    │  └─────────────┬─────────────┘
    │  ┌─────────────┴─────────────┐
    │  │     pending callbacks     │
    │  └─────────────┬─────────────┘
    │  ┌─────────────┴─────────────┐
    │  │       idle, prepare       │
    │  └─────────────┬─────────────┘      ┌───────────────┐
    │  ┌─────────────┴─────────────┐      │   incoming:   │
    │  │           poll            │<─────┤  connections, │
    │  └─────────────┬─────────────┘      │   data, etc.  │
    │  ┌─────────────┴─────────────┐      └───────────────┘
    │  │           check           │
    │  └─────────────┬─────────────┘
    │  ┌─────────────┴─────────────┐
    └──┤      close callbacks      │
      └───────────────────────────┘
+ 
*/

/* const fs = require("fs");

// Mainline
console.log("Hello, ----------- mainline");
console.log("world. ----------- mainline");

// end mainline / pre timers phase 1
process.nextTick(() => {
  console.log("nexttick --------- before event loop");
});

// timers phase 1
setTimeout(() => {
  console.log("timeout - 0s ----- Timers 1");
}, 0);

// timers phase 1
setImmediate(() => {
  console.log("immediate -------- Timers 1");
});

// timers phase 1
setTimeout(() => {
  console.log("timeout - 0s ----- Timers 1");
}, 0);

// begin polling phase
fs.readFile(__filename, () => {
  // end poll phase
  process.nextTick(() => {
    console.log("nexttick i/o ----- After Polling");
  });
  // check phase
  setImmediate(() => {
    console.log("immediate i/o ---- Check");
  });
  // timers phase 2
  setTimeout(() => {
    console.log("timeout i/0 0s --- Timers 2");
  }, 0);
  // timers phase 3
  setTimeout(() => {
    console.log("timeout i/0 3s --- Timers 3");
  }, 3000);
});

// timers phase 4
setTimeout(() => {
  console.log("timeout - 5s ----- Timers 4");
}, 5000);

process.on("beforeExit", () => {
  console.log("process.on ------- beforeExit");
});
 */

const fs = require('fs');

// // blocking loop 2B
// for (let i = 0; i < 2000000000; i++) {
//   if (i === 1999999999) {
//     console.log('blocking loop');
//   }
// }

// timers phase 4
setTimeout(() => {
  console.log('timeout - 5s ----- Timers 4');
}, 5000);

// Mainline
console.log('Hello, ----------- mainline');

// timers phase 1
setTimeout(() => {
  console.log('timeout - 0s ----- Timers 1');
}, 0);

// Before Exit
process.on('beforeExit', () => {
  console.log('process.on ------- beforeExit');
});

// timers phase 1
setImmediate(() => {
  console.log('immediate -------- Timers 1');
});

// begin polling phase
fs.readFile(__filename, () => {
  // timers phase 3
  setTimeout(() => {
    console.log('timeout i/0 3s --- Timers 3');
    // blocking loop 3B
    for (let i = 0; i < 3000000000; i++) {
      if (i === 2999999999) {
        console.log('blocking loop');
      }
    }
  }, 3000);
  // check phase
  setImmediate(() => {
    console.log('immediate i/o ---- Check');
  });
  // timers phase 2
  setTimeout(() => {
    console.log('timeout i/0 0s --- Timers 2');
  }, 0);
  // end poll phase
  process.nextTick(() => {
    console.log('nexttick i/o ----- After Polling');
  });
});
// end mainline / pre timers phase 1
process.nextTick(() => {
  console.log('nexttick --------- before event loop');
});

console.log('world. ----------- mainline');

// timers phase 1
setTimeout(() => {
  console.log('timeout - 0s ----- Timers 1');
}, 0);

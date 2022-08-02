const tt = new Date();
tt.setFullYear(1982);
tt.setMonth(9);
tt.setDate(25);
tt.setHours(0)
tt.setMinutes(0)
tt.setSeconds(0)
console.log(tt.toString());
const ttt = new Date();
ttt.setTime(tt)
console.log(ttt)
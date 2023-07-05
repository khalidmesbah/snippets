/* relativeTimeFormatter.js */
const formatter = new Intl.RelativeTimeFormat("en");
console.log(formatter.format(48, `month`));
const diff = new Date() - new Date("4/18/2021");

const s = formatter.format(-diff / 1000, "second");
const m = formatter.format(-diff / (1000 * 60), "minute");
const h = formatter.format(-diff / (1000 * 60 * 60), "hour");
const d = formatter.format(-diff / (1000 * 60 * 60 * 24), "day");
const mo = formatter.format(-diff / (1000 * 60 * 60 * 24 * 30), "month");
const y = formatter.format(-diff / (1000 * 60 * 60 * 24 * 30 * 12), "year");

// console.log(`🚀 ~ s`, s);
// console.log(`🚀 ~ m`, m);
// console.log(`🚀 ~ h`, h);
// console.log(`🚀 ~ d`, d);
// console.log(`🚀 ~ mo`, mo);
// console.log(`🚀 ~ y`, y);

/* number formatter */
const numFormatterStandard = Intl.NumberFormat("en", { notation: "standard" });
const numFormatterCompact = Intl.NumberFormat("en", { notation: "compact" });
const numFormatterScientific = Intl.NumberFormat("en", {
  notation: "scientific",
});
const numFormatterEngineering = Intl.NumberFormat("en", {
  notation: "engineering",
});
console.log(numFormatterScientific.format(10023213));
console.log(numFormatterCompact.format(1002_3213));
console.log(numFormatterStandard.format(10023213));
console.log(numFormatterEngineering.format(10023213));

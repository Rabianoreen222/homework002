import Bed from "./class.js";

var mybed = new Bed(
  "mybed",
  "double size",
  "brown",
  "yellow",
  2,
  "diamond",
  2,
  "months",
  "true",
  "december 5, 2018 15:00:00 PST"
);

console.log("the bed:", mybed);
console.log("the time used:", mybed.age);
console.log("the sidetable:", mybed.sidetable);
console.log("the date:", mybed.dateacquired);
console.log("time: ", mybed.timeused("false"));

const moment = require("moment");

console.log("Javascript what up!");

let dayStart = moment()
  .startOf("day")
  .fromNow();

console.log(dayStart);

let hourStart = moment()
  .startOf("hour")
  .fromNow();

console.log(hourStart);

let today = "Tuesday";
`${today} started ${dayStart}. But you knew that already.`;

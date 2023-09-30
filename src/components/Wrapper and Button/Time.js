let date = new Date();
let options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  day: "numeric",
  month: "short",
  year: "numeric",
};
export const Time = date.toLocaleDateString("en-GB", options);

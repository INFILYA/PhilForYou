let date = new Date();
let options = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
export const Time = date.toLocaleDateString("en-GB", options);

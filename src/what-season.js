import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date + "").includes("GMT")) {
    throw new Error("Invalid date!");
  }
  if (date + "" == new Date()) throw new Error("Invalid date!");
  const curentMonth = date.getMonth();
  const allMonth = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  return allMonth[curentMonth];
}

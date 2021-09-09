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
export default function getSeason(data) {
  const curentMonth = data.getMonth();
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
  if (data == undefined) {
    return "Invalid date!";
  }
  if (curentMonth < 0 || curentMonth > 11) {
    throw new Error("Invalid date!");
  } else {
    return allMonth[curentMonth];
  }
}

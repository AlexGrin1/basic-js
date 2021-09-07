import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  const firstLetterName = arr.map((el) => {
    if (typeof el === "string") {
      return el[0].toUpperCase();
    }
  });
  if (!firstLetterName.join("")) {
    return false;
  }
  return firstLetterName.sort().join("").toUpperCase().replace(" ", "");
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

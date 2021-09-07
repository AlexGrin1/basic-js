import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(numb) {
  const naturalLnOfTwo = 0.693;
  if (
    typeof numb != "string" ||
    isNaN(+numb) ||
    numb == undefined ||
    numb < 1
  ) {
    return false;
  }
  let speed = naturalLnOfTwo / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / numb) / speed);
  if (result < 0) {
    return false;
  } else {
    return result;
  }
  trow;
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, { ...options }) {
  let addArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(options.addition);
  }
  let res = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    res.push(`${str}${addArr.join(`${options.additionSeparator}`)}`);
  }
  return res.join(`${options.separator}`);
}

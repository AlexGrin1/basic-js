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
  let addition = options.addition ? options.addition : "";
  let additSeparator = options.additionSeparator ? options.additionSeparator : "|";
  let additTime = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let conditionOne = (String(addition) + String(additSeparator)).repeat(additTime - 1) + String(addition);
  let separator = options.separator ? options.separator : "+";
  let time = options.repeatTimes ? options.repeatTimes : "1";
  return (String(str) + conditionOne + String(separator)).repeat(time - 1) + String(str) + conditionOne;
}

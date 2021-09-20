import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(str1, str2) {
  let arrayFromStr1 = str1.split("");
  let arrayFromStr2 = str2.split("");
  let count = 0;
  arrayFromStr1.forEach((el, index) => {
    console.log(arrayFromStr2);
    let elementIndex = arrayFromStr2.indexOf(el);
    console.log(el, index);
    if (arrayFromStr2.includes(el)) {
      count++;
      arrayFromStr2[elementIndex] = "";
    }
  });
  return count;
}

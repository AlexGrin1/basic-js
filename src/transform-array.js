import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr3 = [].concat(arr);
  const methods = {
    "--discard-next": function (index) {
      if (arr[index + 1] == undefined) {
        arr3.splice(index, 2);
      } else {
        arr3.splice(index, 2);
      }
    },
    "--discard-prev": function (index) {
      if (index <= 0) {
        arr3.splice(0, 1);
      } else {
        arr3.splice(index - 1, 2);
      }
    },
    "--double-next": function (index) {
      if (arr[index + 1] != undefined) {
        arr3[index] = arr3[index + 1];
      } else {
        arr3.splice(index);
      }
    },
    "--double-prev": function (index) {
      if (index <= 0) {
        arr3.splice(0, 1);
      } else {
        arr3[index] = arr3[index - 1];
      }
    },
  };
  for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === "string") {
      if (Object.keys(methods).includes(arr3[i])) {
        methods[`${arr3[i]}`](i);
      }
    }
  }
  return arr3;
}

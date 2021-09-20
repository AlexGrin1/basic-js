import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  maker: [],
  getLength() {
    return this.maker.length;
  },
  addLink(value) {
    this.maker.push(`( ${value} )`);
    return this;
  },
  removeLink(value) {
    if (typeof value === "number" && value > 0 && value <= this.maker.length) {
      this.maker.splice(value - 1, 1);
    } else {
      this.maker = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
    // if (typeof value !== "number" && value <= 0 && value > this.maker.length) {
    //   this.maker = [];
    //   throw new Error("You can't remove incorrect link!");
    // } else {
    //   this.maker.splice(value - 1, 1);
    // }
    // return this;
  },
  reverseChain() {
    this.maker.reverse();
    return this;
  },
  finishChain() {
    let result = [...this.maker];
    this.maker.length = [];
    return result.join("~~");
  },
};

export default chainMaker;

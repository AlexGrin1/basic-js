import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor(n=0){
  this.count=n}
  calculateDepth(arr) {
		if(Array.isArray(arr)){this.count++}
		let arr1=arr.map(el=>{
			if(Array.isArray(el)){
				depthCalc.calculateDepth(el)}
		})
		return this.count
	}}

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

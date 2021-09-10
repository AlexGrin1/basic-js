import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(arr) {

	let arr1=[]
	for(let i=0;i<arr[0].length;i++){
		arr1[i]=[]
		for (let j=0;j<arr.length;j++){
			arr1[i].push(arr[j][i])
		}
	}
let sum=0
	arr1.map(el=>{
			for(let i=0;i<el.length;){
				if(el[i]==0){
					break
				}
				else{sum+=el[i];i++}
			}
		})
	return sum	
}

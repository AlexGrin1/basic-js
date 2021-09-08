import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
<<<<<<< HEAD
  constructor(n){
    this.maker=[]
  },
  getLength() {return this.maker.length;
  },
  addLink(value) {
    this.maker.push(`(${value})`);
		return chainMaker
  },
  removeLink(value) {
    if(typeof value !=="number" ||!Number.isInteger(value) || value===undefined){
throw new Error ("You can't remove incorrect link!")
}
		else{
			this.maker.splice(value-1,1);
		return chainMaker	
		}
  },
  reverseChain() {
    this.maker.reverse();
		return chainMaker
=======
  maker:[],
  getLength() {return this.maker.length
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
		this.maker.push(`(${value})`)
		return this
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(value) {
		if(typeof value !=="number" ||!Number.isInteger(value) || value===undefined){
throw new Error ("You can't remove incorrect link!")			
		}
		else{
			this.maker.splice(value-1,1);
		return this	
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.maker.reverse()
		return this
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> cec1b7978b6051e95ee69b6ce06a0106f1779709
  },
  finishChain() {
    let result=[...this.maker]
		this.maker.length=0
		return result.join('~~')}
<<<<<<< HEAD
}

=======
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
>>>>>>> cec1b7978b6051e95ee69b6ce06a0106f1779709

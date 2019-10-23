'use strict';

const split = (array) => {
	const num = Math.floor(array.length / 2)
	const firstHalf = array.slice(0, num)
	const lastHalf = array.slice(num + 1)

	return [firstHalf, lastHalf]
}
// Complete this algo
const binarySearch = (array, target) => {
	if (array.length > 1) {
		const splitArr = split(array)
		const firstHalf = splitArr[0]
		const secondHalf = splitArr[1]
		if (target === firstHalf[-1]) {
			return true;
		}
		else if (target > firstHalf[-1]) {
			return binarySearch(secondHalf, target)
		} else {
			return binarySearch(firstHalf, target)
		}
	} else {
		return (array[0] === target)
	}

};``

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

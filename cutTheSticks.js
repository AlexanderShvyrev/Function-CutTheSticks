/**You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left. */

function cutTheSticks(arr) {
    let newArr = []
    while (arr.length > 0) {
        let min = arr[0]

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]

            }
        }
        newArr.push(arr.length)
        console.log("this is min", min)
        for (let j = 0; j < arr.length; j++) {
            if (min - arr[j] == 0) {
                arr.splice(j, 1)
                j--
            } else {
                arr[j] -= min
            }
        }
    }
    return newArr
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))
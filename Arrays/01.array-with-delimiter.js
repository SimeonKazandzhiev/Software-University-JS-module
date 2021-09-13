
// Solution 1:
// function solve(inputArr, delimiter){

//     let result = [];

//     for (let i = 0; i < inputArr.length; i++) {
//         result[result.length] = inputArr[i];
        
//     }
    
//     return result.join(delimiter);

// }
// Solution 2:
// const solution = (arr, delimiter) => {

//     return arr.join(delimiter);

// }

// Solution 3:
const solution = (arr, delimiter) => arr.join(delimiter);

   console.log(solution(['One', 'Two', 'Three', 'Four', 'Five'], '-'));
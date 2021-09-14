//Solution 1:
// function solve(inputArr, step) {

//     let result = [];

//     for (let i = 0; i < inputArr.length; i += step) {

//         result[result.length] = inputArr[i];

//     }

//     return result;

// }
//Solution 2:

// const solution = (arr,step) => {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
        
//         if(i % step === 0){
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// Solution 3:
//When I'm not using the element from the prdicate I can replace it with '_'.
const solution = (arr, step) => arr.filter((el,i) => i % step ===0);


console.log(solution(['5', '20', '31', '4', '20'], 2));
console.log(solution(['dsa', 'asd', 'test', 'tset'], 2));
function solution(input){
    
    let evenNumbers = [];

    for (let i = 0; i < input.length; i+=2) {
       evenNumbers[evenNumbers.length] = input[i];
    }
    
    return evenNumbers.join(' ');



}

console.log(solution(['20', '30', '40', '50', '60']));
function solve(inputArray, rotations) {

    for (let i = 0; i < rotations; i++) {
        const element = inputArray.pop();
        inputArray.unshift(element);
    }
    return inputArray.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2));
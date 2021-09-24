function solve(inputObj) {

    if(inputObj['dizziness'] == true){
        inputObj['levelOfHydrated'] += inputObj['weight'] * 0.1 * inputObj['experience'];
        inputObj['dizziness'] = false; 
    }

    return inputObj;
}

console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));
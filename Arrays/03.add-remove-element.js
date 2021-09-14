function solve(inputArr) {

    let result = [];

    for (let i = 0; i < inputArr.length; i++) {

        if (inputArr[i] == 'add') {
            result[result.length] = i + 1
        } else if (inputArr[i] == 'remove') {
            result[result.length - 1] = i + 1;
            result.pop(result.length - 1);
        }

    }

    if (result.length == 0) {
        return 'Empty';
    }else{
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
    
}

console.log(solve(['remove', 'remove', 'remove']));
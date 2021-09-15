function solve(num1, num2){

    let n = Number(num1);
    let k = Number(num2);

    let result = [];
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        result[result.length] += k;
    }
    console.log(result);
}

solve(6, 3);
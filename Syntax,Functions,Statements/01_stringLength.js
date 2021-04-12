function findTheSumLengthOfStrings(param1, param2, param3) {
    let sumLength;
    let averageSumLength;

    let sumFirst = param1.length;
    let sumSecond = param2.length;
    let sumThird = param3.length;

    sumLength = sumFirst + sumSecond + sumThird;
    averageSumLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageSumLength);
}

findTheSumLengthOfStrings('pasta', '5', '22.3');

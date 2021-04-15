function computeTheNumbers(numberOne, numberTwo) {
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    let lower = Math.min(numberOne, numberTwo);
    let bigger = Math.max(numberOne, numberTwo);
    let output = 0;

    for (let i = lower; i > 0; i--) {
        if (bigger % i == 0 && lower % i == 0) {
            output = i;
            break;
        }
    }

    console.log(output);
}
computeTheNumbers(2154, 458);
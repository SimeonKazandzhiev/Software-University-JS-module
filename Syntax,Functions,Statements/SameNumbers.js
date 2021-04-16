function sameNumbers(number) {
    let sum = 0;
    let lastDigit = number % 10;
    let equalsCount = 0;

    while (number / 10 > 0) {
        let digit = number % 10;
        sum += digit;

        if (digit !== lastDigit) {
            equalsCount++;
        }
        lastDigit = digit;
        number = Math.floor(number / 10);
    }
    console.log(equalsCount === 0 ? true : false);
    console.log(sum);

}
sameNumbers(1234);
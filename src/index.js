function divide(dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 0) throw new Error("Bo'lishga bo'linmaning 0 ga teng bo'lishi mumkin emas");

    let sign = (Math.sign(dividend) === Math.sign(divisor)) ? 1 : -1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }

    return sign * quotient;
}

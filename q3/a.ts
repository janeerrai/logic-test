
const primeCount = (start: number, end: number): number => {

    // Prime number is positive number greater than 1 soo;

    if (start <= 1 && end <= 1) {
        return 0;
    } else {
        const last = end / 2 + 1;
        let primeCount = 0;
        for (let i = start; i <= end; i++) {

            let isPrime = true;
            for (let k = 2; k < i / 2; k++) {
                const mode = i % k;

                if (mode === 0) {
                    isPrime = false;
                    break;
                }


            }
            if (isPrime) {
                primeCount = primeCount + 1;
            }

        }

        return primeCount;
    }
}

console.log(primeCount(10, 30))
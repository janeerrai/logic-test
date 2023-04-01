
function nextPerfectSquare(a: number): number {

    if (a < 0) {
        return 0;
    } else if (a === 0) {
        return 1;
    } else if (a < 4) {
        return 4;
    } else {
        let n = a / 2 + 1;

        let nextSquare = 0;
        for (let i = 3; i <= n; i++) {
            let square = i * i;
            if (a <= square) {
                nextSquare = square;
                break;
            }
        }

        return nextSquare;
    }
}

console.log(nextPerfectSquare(36));
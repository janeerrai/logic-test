function nUpCount(arr: number[], n: number): number {

    if (!arr.length) {
        return 0;
    }

    if (arr[0] >= n) {
        return 1;
    }

    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum > n) {
            count = count + 1;
        }
    }

    return count;

}

console.log(nUpCount([2, 3, 1, -6, 8, -3, -1, 2], 5));
console.log(nUpCount([6, 3, 1], 6));
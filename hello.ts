/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function () {
    const n = 3;
    const edges = [[0, 1], [1, 2]];

    // Lets find the unique graph
    let uniqueNodes: Array<number> = [];
    edges.forEach((x, i) => {
        if (i === 0) {
            uniqueNodes.push(x[0]);
            uniqueNodes.push(x[1]);
        } else {
            const isUniqueFirst = uniqueNodes.some(item => item === x[0]);
            if (!isUniqueFirst) uniqueNodes.push(x[0]);
            const isUniqueSecond = uniqueNodes.some(item => item === x[1]);
            if (!isUniqueSecond) uniqueNodes.push(x[1])
        }
    });

    const filter = (node) => {
        const items = edges.filter((x) => {
            const x1 = x[0];
            const x2 = x[1];
            return (node === x1) || (node === x2)
        });

        return items.length;
    }

    let count = 0;
    // Find the pair of nodes 
    for (let i = 0; i < uniqueNodes.length; i++) {
        const x = filter(uniqueNodes[i]);
        if (x < (n - 1)) {
            count = count + 1;
        }
    }

    console.log(count);
    return count
};


console.log(countPairs())
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function () {
    var n = 3;
    var edges = [[0, 1], [1, 2]];
    // Lets find the unique graph
    var uniqueNodes = [];
    edges.forEach(function (x, i) {
        if (i === 0) {
            uniqueNodes.push(x[0]);
            uniqueNodes.push(x[1]);
        }
        else {
            var isUniqueFirst = uniqueNodes.some(function (item) { return item === x[0]; });
            if (!isUniqueFirst)
                uniqueNodes.push(x[0]);
            var isUniqueSecond = uniqueNodes.some(function (item) { return item === x[1]; });
            if (!isUniqueSecond)
                uniqueNodes.push(x[1]);
        }
    });
    var filter = function (node) {
        var items = edges.filter(function (x) {
            var x1 = x[0];
            var x2 = x[1];
            return (node === x1) || (node === x2);
        });
        return items.length;
    };
    var count = 0;
    // Find the pair of nodes 
    for (var i = 0; i < uniqueNodes.length; i++) {
        var x = filter(uniqueNodes[i]);
        if (x < (n - 1)) {
            count = count + 1;
        }
    }
    console.log(count);
    return count;
};
console.log(countPairs());
//# sourceMappingURL=hello.js.map
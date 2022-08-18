let mat1 = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];
getSquareTransform(mat1);

function getSquareTransform(arr) {
    temp_mat1Transform = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            temp_mat1Transform.push(arr[j][i])
        }
    }
    var chunks = [], i = 0, n = temp_mat1Transform.length;
    while(i < n){
        chunks.push(temp_mat1Transform.slice(i, i = i + arr.length))
    }
    return chunks;
}
console.table(mat1);
console.table(getSquareTransform(mat1));



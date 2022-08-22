let mat1 = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];

console.table(mat1[0].map((obj , colIndex) => {
     return mat1.map(obj2 => obj2[colIndex])
}))
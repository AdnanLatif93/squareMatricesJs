let mat1 = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];

console.table(mat1.map((obj , colIndex, array) => {
     return mat1.map(obj2 =>  obj2[colIndex])
}))

console.table(mat1.map(function(element, index, array){
   return mat1.map(function(element2, index2, array2){
       return element2[index]
    })
}));

var transpose = [];
for (var i = 0; i < mat1.length; i++) {
    transpose.push([]);
    for (var j = 0; j < mat1.length; j++) {
        transpose[i].push(mat1[j][i])
    }
}
console.table((transpose)); 



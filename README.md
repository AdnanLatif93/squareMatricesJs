# squareMatricesJs
# Javascript Program Transformation of Square Matrices.
# let mat1 = [
#    [1, 1, 1, 1],
#    [2, 2, 2, 2],
#    [3, 3, 3, 3],
#    [4, 4, 4, 4]
# ];
# temp_mat1Transform = [];
# for (var i=0; i < mat1.length; i++){
#    for(var j=0; j<mat1[i].length; j++){
#        temp_mat1Transform.push(mat1[j][i])
#    }
# }
# function splitArrayIntoChunksOfLen(arr, len) {
#    var chunks = [], i = 0, n = arr.length;
#    while (i < n) {
#      chunks.push(arr.slice(i, i += len));
#    }
#    return chunks;
#  } 
#  var transformedArray=splitArrayIntoChunksOfLen(temp_mat1Transform,mat1.length);
#  console.table(mat1)
#  console.table(transformedArray)
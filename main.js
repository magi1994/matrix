const {matrixProduct, sumOfMatrices, sumOfRows,} = require('./utils');

let mat = [['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I']];


let mat1 = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

let mat2 = [[7, 6, 3],
  [8, 5, 2],
  [9, 4, 1]];

  console.log(matrixProduct(mat1, mat2));
  console.log(sumOfMatrices(mat1, mat2));
  console.log(sumOfRows(mat1));
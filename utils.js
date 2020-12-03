function matrixProduct(mat1, mat2){
  let newMatrix = [];
  let res;
  
 
  for (let k = 0; k < mat1.length; k++) {
    newMatrix[k] = [];
    for (let c = 0; c < mat2.length; c++) {
      res = 0;
      for (let i = 0; i < mat1.length; i++) {
        res += mat1[k][i] * mat2[i][c];
      }
      newMatrix[k][c] = res;
    }
  }
  return newMatrix;
  
}

function sumOfMatrices(mat1, mat2){
  let newMatrix = [];
  let res;
  
 
  for (let k = 0; k < mat1.length; k++) {
    newMatrix[k] = [];
    res = 0;
    for (let i = 0; i < mat1[0].length; i++) {
      res = mat1[k][i] + mat2[k][i];
      newMatrix[k][i] = res;
    }
    
  }
  return newMatrix;
  
}

function sumOfArrays(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}


function sumOfRows(mat){
  let newMatrix = [];
  for (let k = 0; k < mat.length; k++){
    newMatrix.push(sumOfArrays(mat[k]))
  }
  return newMatrix;
}

module.exports = {
  matrixProduct,
 sumOfMatrices,
 sumOfArrays,
 sumOfRows,
};


const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  let col = matrix[0].length;
  let row = matrix.length;

  for(let i = 0; i < col; i++) {
    let newArr = [];
    for(let j = 0; j < row; j++) {
      newArr.push(matrix[j][i]);
    }
    result.push(newArr);
  }

  return result;
};

const diagonal = function(matrix) {
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i === j){
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
}

module.exports = {
  transpose,
  diagonal,
}


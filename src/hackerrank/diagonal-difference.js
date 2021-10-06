const diagonalDifference = (matrix = [[]]) =>{

    let principalDiagonal = 0;
    let secondaryDiagonal = 0;
    let secondaryDiagonalIterator = matrix.length;

    for( let line = 0 ; line < matrix.length ; line++ ){

        principalDiagonal += matrix[line][line];
        secondaryDiagonal += matrix[line][--secondaryDiagonalIterator];

    }

    return Math.abs(principalDiagonal - secondaryDiagonal);


};

module.exports = { diagonalDifference }
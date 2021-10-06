const { diagonalDifference } = require('./diagonal-difference');


test('diagonalDifference of matrix [[11, 2, 4], [4, 5, 6], [10, 8, -12]] should be 15', ()=>{
    expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(15);
});
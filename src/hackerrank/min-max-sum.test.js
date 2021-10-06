const { minMaxSum } = require('./min-max-sum');

test('minMaxSum should 10 and 14', ()=>{
    expect(minMaxSum([1, 2, 3, 4, 5])).toEqual({"firstSum":10, "secondSum":14});
})
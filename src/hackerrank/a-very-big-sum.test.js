const { aVeryBigSum } = require('./a-very-big-sum');

test('the inputElements must be array', ()=>{

    const notArray = {};

    expect(aVeryBigSum(notArray)).toBeUndefined();
    
});

test('1000000001 + 1000000002 + 1000000003 + 1000000004 + 1000000005 should be 5000000015', ()=>{
    
    const inputElements = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
        
    expect(5000000015).toBe(aVeryBigSum(inputElements));
})
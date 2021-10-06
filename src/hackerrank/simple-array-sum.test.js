const { simpleArraySum} = require('./simple-array-sum');

test('the sum of the array [1,2,3,4,5] should be 15', ()=>{
    
    
    expect(15).toBe(simpleArraySum([1,2,3,4,5]));

})
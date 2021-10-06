const { compareTheTriplets } = require('./compare-the-triplets');

test("the array's length should be the same", ()=>{
    expect(compareTheTriplets([1,2,3,4,5],[])).toBeFalsy()
});

test('the comparsion of arrays a[1,2,3] and b[3,2,1] should be a=1, b=1', ()=>{
    expect([1, 1]).toEqual(compareTheTriplets([1,2,3], [3,2,1]));
});
const { birthdayCakeCandles } = require('./birthday-cake-candles');

test('birthdayCakeCandles should be undefined', ()=>{
    expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2)
})
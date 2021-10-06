const { timeConversion } = require('./time-conversion');

test('timeConversion of 12:45:54PM should be 12:45:54', ()=>{
    expect(timeConversion('12:45:54PM')).toBe('12:45:54');
})

test('timeConversion of 04:59:59AM should be 12:45:54', ()=>{
    expect(timeConversion('04:59:59AM')).toBe('04:59:59');
})




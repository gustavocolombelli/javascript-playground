const { plusMinus } =  require('./plus-minus');


test('plusMinus should be true', ()=>{

    const { negatives, positives, zeros } = plusMinus([-4, 3, -9, 0, 4, 1]);
    
    expect(zeros).toBeCloseTo(0.166667, 6);
    expect(negatives).toBeCloseTo(0.333333, 6);
    expect(positives).toBeCloseTo(0.500000, 6);
    
})
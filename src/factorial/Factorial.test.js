import getFactorial from './Factorial'


test('getFactorial should be a function', ()=>{

    expect(getFactorial).toBeInstanceOf(Function) //construtor do objeto que estamos testando

});


function testResultFactorial(term, expected){
    
    test(`getFactorial should return (${expected})`, function(){

        const actual = getFactorial(term);
        expect(actual).toBe(expected);
        //o esperado do valor da invocação getFactoria(3) seja 6 "expected"
    
    });
}

testResultFactorial(3, 6);
testResultFactorial(2, 2);
testResultFactorial(4, 24);
testResultFactorial(0, 1);
testResultFactorial(1, 1);

//npm run test:watch
import convertRomanosToArabic from "./Romanos";

test('convertRomanosToArabic should be a function', ()=>{

    expect(convertRomanosToArabic).toBeInstanceOf(Function) //construtor do objeto que estamos testando

});

test(`convertRomanosToArabic('X') should return 10`, function(){

    const actual = convertRomanosToArabic('X');
    const expected = 10;

    expect(actual).toBe(expected);

})
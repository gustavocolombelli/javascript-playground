const { sum } = require('./fundamental-jest');

/*Using Matchers Jest uses "matchers" to let you test values in different ways. 
This document will introduce some commonly used matchers. For the full list, see the


*/
test("two plus two should be four", ()=>{
    expect(2+2).toBe(4)
})
test("1 + 2 should be 3", ()=>{
    expect(3).toBe(sum(1, 2));
})


/*
.toEqual()
verifica Rcursivamente todos os campos de um objeto ou array.
*/
test("object assignment", ()=>{
    const data = { one: 1};
    data['two'] = 2;
    //data['zero'] = 0 ->> fail / recursivo
    expect(data).toEqual({one:1, two:2})
})

test('array assignment', ()=>{
    const data = [1,2,3,[21,22,23]];
    expect(data).not.toEqual([1,2,3,[]])
})

test('adding positive number is not zero', ()=>{
    for(let i = 0 ; i < 10 ; i++ ){
        for(let j = 0 ; j < 10 ; j++ ){
            expect(i + j).not.toBe()
        }
    }
})
/**
 * Truthiness / Verdade #
 Em testes, às vezes você precisa distinguir entre indefinido, nulo e falso,
 mas às vezes não deseja tratá-los de forma diferente. Jest contém helpers
 que permitem que você seja explícito sobre o que deseja.
 * 
 */

 test('Truthiness - null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('Truthiness - false', () => {
    const n = false;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('Truthiness - undefined', () =>{
      const n = undefined;
      expect(n).not.toBeNull();
      expect(n).not.toBeDefined();
      expect(n).toBeUndefined();
      expect(n).not.toBeTruthy ;
      expect(n).not.toBeFalsy 
  })

  test('Truthiness - zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  /**
   * Numbers#
    A maioria das maneiras de comparar números tem equivalentes correspondentes.
   */

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('two plus three', ()=>{
      const value = 2 + 3;
      expect(value).toBeGreaterThan(4);
      expect(value).toBeGreaterThanOrEqual(4.5);
      expect(value).toBeLessThan(6);
      expect(value).toBeLessThanOrEqual(5);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });


/**
 * Strings#
   strings com expressões regulares com toMatch:
 */
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

/**
 * Matrizes e iteráveis ​​#
    verificar se uma matriz ou iterável contém um item específico usando toContain:
 */

const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
];
      
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
  throw new Error('você está usando o JDK errado');
}

test('compilando para android segue conforme esperado', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // Você também pode usar a mensagem exata de erro ou uma regexp
  expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
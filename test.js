// Importar la función sum del archivo app.js
const { sum } = require('./app.js');
// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//========================================================================

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollars } = require('./app.js');
    const dollars = fromEuroToDollars(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollars(3.5)).toBe(3.745);
})

test("One dollar should be 146.26168224299064 yens", function() {
    const { fromDollarToYens } = require('./app.js');
    const yen = fromDollarToYens(3.5);
    const expected = 3.5 * 146.26168224299064;
    expect(fromDollarToYens(3.5)).toBe(511.91588785046724);
})

test("One yen should be 0.0055591054313099035 pounds", function() {
    const { fromYenToPounds } = require('./app.js');
    const pounds = fromYenToPounds(3.5);
    const expected = 3.5 * 0.0055591054313099035;
    expect(fromYenToPounds(3.5)).toBe(0.01945686900958466);
});

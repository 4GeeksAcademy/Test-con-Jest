// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

//========================================================================

const fromEuroToDollars = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYens = (valueInDollar) => {
    let valueInYen = valueInDollar * 146.26168224299064;
    return valueInYen;
}

const fromYenToPounds = (valueInYen) => {
    let valueInPounds = valueInYen * 0.0055591054313099035;
    return valueInPounds;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"];
    const yen = euros * oneEuroIs["JPY"];
    return yen;
};

const fromEuroToDollar = (euros) => euros * oneEuroIs["USD"];

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs["JPY"];
    const pounds = euros * oneEuroIs["GBP"];
    return pounds;
};

console.log("1 dólar equivale a "+fromDollarToYen(1)+" yenes");
console.log("1 euro equivale a "+fromEuroToDollar(1)+" dólares");
console.log("1 yen equivale a "+fromYenToPound(1)+" libras");

module.exports = { sum, fromEuroToDollars, fromDollarToYens, fromYenToPounds}
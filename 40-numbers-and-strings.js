const price = "125.999";

const priceInt = parseInt( price );
const priceFloat = parseFloat( price );
const price2DecimalsPlaces = priceFloat.toFixed( 2 ); // string representation

console.log( priceInt );
console.log( priceFloat );
console.log( price2DecimalsPlaces );

console.log( 0.1 + 0.2 ); // "erroneous result"
console.log( 0.1 + 0.3 ); // "right result"
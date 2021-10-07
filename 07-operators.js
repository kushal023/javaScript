/*
    +, -, *, /, %
*/

let x = 12, y = 5;

console.log( 3 ** 4 );
console.log( x ** y );

console.clear();

/* relational - <, >, <=, >=, ==, != */
/* ===, !== */
console.log( 1 == 1 );
console.log( 1 === 1 );

console.log( 1 == "1" ); // true - avoid using == (check value)
console.log( 1 === "1" ); // false - always use strict equality check (checks both data type and value match)

// ? :
let result = ( x === 12 ? "x is twelve" : "x is not twelve" );
console.log( result );

// !, &&, ||
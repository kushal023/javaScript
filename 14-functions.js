// 2 old syntaxes
// function declaration syntax
console.log( sum1( 12, 13 ) );

function sum1( x, y ) {
    let result = x + y;
    return result;
};


// function expression syntax
// console.log( sum2( 12, 13 ) ); // error

// RHS is called a "function expression"
let sum2 = function( x, y ) {
    let result = x + y;
    return result;
};

console.log( sum2( 12, 13 ) );

// 1 new syntax (ES2015) - arrow function
let sum2 = ( x, y ) => {
    let result = x + y;
    return result;
};
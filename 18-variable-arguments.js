// ... -> rest operator (ES2015)
const foo = function( x, y, ...restOfArgs ) {
    console.log( x, y, restOfArgs );
};

foo( 12 );
foo( 12, 13 );
foo( 12, 13, 14 ); // passing more arguments is ok
foo( 12, 13, 14, 15, 16 ); // passing more arguments is ok
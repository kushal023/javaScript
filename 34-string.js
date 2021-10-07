// substring(), substr()
// includes()
// indexOf()
let quote = 'With great power comes great responsibility';
console.log( quote.substring( 11, 16 ) );
console.log( quote.substr( 11, 5 ) );
console.log( quote.indexOf( 'power' ) );
console.log( quote.indexOf( 'great' ) );
console.log( quote.indexOf( 'hello' ) ); // -1
console.log( quote.indexOf( 'great', 15 ) );
console.log( quote.includes( 'power' ) ); // true
console.log( quote.includes( 'hello' ) ); // false

// replace()
let result = quote.replace( 'responsibility', 'electricity bill' );
console.log( quote );
console.log( result );

// trim() -> remove leading and trailing spaces
let input = '   Harry Potter      ';
console.log( input.length );
console.log( input.trim() );
console.log( input.trim().length );

// toUpperCase(), toLowerCase(), split()
console.log( input.toUpperCase() );
console.log( input.toLowerCase() );

console.log( "Harry, Larry, Barry".split( ',' ) );

console.log( "Harry" < "Larry" ); // true
console.log( "Larry" < "Barry" ); // false
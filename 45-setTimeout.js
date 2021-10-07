console.log( 1 );
setTimeout( () => console.log( 2 ), 2000 );
console.log( 3 );
setTimeout( () => console.log( 4 ), 2000 );
console.log( 5 );
setTimeout( () => console.log( 6 ), 0 ); // goes into Event Queue immediately
console.log( 7 );

// Event Queue is checked for functions lined up for execution
console.log( Math.max( 12, 10, 45, 23 ) );

const arr = [ 12, 10, 45, 23 ];
console.log( Math.max( arr ) ); // NaN
console.log( Math.max( ...arr ) ); // ...arr => 12, 10, 45, 23

// Math.min
// Math.sin
// Math.cos
console.log( Math.sqrt( 5 ) );
console.log( 5 ** 0.5 );

console.log( Math.log( 10 ) );
console.log( Math.PI );

console.log( Math.floor( 2.9 ) ); // 2
console.log( Math.ceil( 2.1 ) ); // 3
console.log( Math.round( 2.49 ) ); // 2
console.log( Math.round( 2.5 ) ); // 3
console.log( Math.random() ); // [0, 1)

// Write a function to generate a random number between any 2 number - [100, 200)
function random( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

console.log( random( 100, 200 ) ); // random number between 100 - 200 (integer)
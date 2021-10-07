const numbers = [ 1, 2, 3, 4, 5 ];

// mutating vs non-mutating methods (change the input array / do not change the input array)

console.log( numbers.slice( 1, 4 ) );

// push()
numbers.push( 6 ); // mutating
console.log( numbers );

let removedItem;
removedItem = numbers.pop();
removedItem = numbers.pop();
removedItem = numbers.pop();

console.log( numbers );

numbers.unshift( 0 );
numbers.unshift( -1 );
numbers.unshift( -2 );

console.log( numbers );

removedItem = numbers.shift();
removedItem = numbers.shift();

console.log( numbers );
console.log( removedItem );

console.log( '--------------' );

// splice() - not slice()
const primes = [ 2, 3, 5, 9, 15, 21, 23, 29 ];
// remove 9, 15, 21 and insert 11, 13, 17, 19
primes.splice(
    3, /* index of first item to remove */
    3, /* how many items to remove */
    11, 13, 17, 19 /* items to insert */
);
console.log( primes );

console.log( '--------------' );

const someNumbers = [ 2, 4, 6, 8, 10, 14, 12, 18, 16, 24, 28, 400, 40 ];
someNumbers.sort(function( x, y ) {
    // given x (first arg), y (second arg)
    // if( x < y ) {
    //     return x - y;
    // }

    // if( x > y ) {
    //     return x - y;
    // }

    // if( x === y ) {
    //     return x - y;
    // }

    return x - y;
});
console.log( someNumbers );

const cities = [
    'Mumbai',
    'Delhi',
    'Chennai'
];

cities.sort();

console.log( cities );

console.log( cities.includes( 'Chennai' ) );
console.log( cities.includes( 'Kolkata' ) );
console.log( cities.indexOf( 'Kolkata' ) ); // -1
console.log( cities.indexOf( 'Chennai' ) ); // -1
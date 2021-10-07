let x = 100;
let y = x; // copy by value
y++;
console.log( x, y );

let john = {
    name: 'John',
    age: 32
};

// variables used to access objects are references to the objects
let jonathan = john; // copy by reference (both john and jonathan refer to the same object in memory)
jonathan.age++; // john is also changed here

console.log( john, jonathan );

let primes = [ 2, 3, 5, 7, 11 ];
let primesCopy = primes;
primesCopy.push( 13 );
console.log( primes, primesCopy );

function squareItems( arr ) {
    for( let i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i] * arr[i];
    }
}

squareItems( primes ); // arr = primes (copy by reference)
console.log( primes );

let primesCopy = primes.slice(); // creates a new array with a copy of the items
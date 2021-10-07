// functions are objects in JavaScript
function sum( x, y ) {
    return x + y;
}

let add = sum; // Both add and sum refer to the same function in memory

console.log( add( 12, 13 ) );

function doArithmetic( x, y, op ) {
    return op( x, y );
}

console.log( doArithmetic( 12, 13, sum ) ); // x = 12, y = 13, op = sum
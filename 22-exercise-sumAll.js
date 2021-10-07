function sumAll( arr, transform ) {
    let result = 0;

    for( let i = 0; i < arr.length; i++ ) {
        result += transform( arr[i] );
    }

    return result;
}

function square( x ) {
    return x * x;
}

console.log( sumAll( [ 1, 2, 3 ], square ) );
console.log(
    sumAll( [ 1, 2, 3 ], function( x ) {
        return x * x * x;
    })
);

sumAll( [ 1, 2, 3 ], Math.sqrt );
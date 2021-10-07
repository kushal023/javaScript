// async function
function sum( x, y, callback ) {
    setTimeout(() => {
        console.log( 'function executed' );
        const result = x + y;
        callback( result );
        // return result; // useless
    }, 5000);

    // return undefined;
}

sum( 12, 13, function( result ) {
    console.log( 'result = ', result );
});
// function context - referred to using "this" keyword
// some useful info
function foo() {
    try {
        console.log( this instanceof Window );
        console.log( 'browser is running the code' );
    } catch( err ) {
        console.log( 'Node.js is running the code' );
    }
}

foo();
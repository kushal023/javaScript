// non-blocking function
// setTimeout will make a request to the browser an return immediately
setTimeout(
    () => {
        console.log( 'function 1 executed' );
    },
    5000
);

setTimeout(
    () => {
        console.log( 'function 2 executed' );
    },
    2000
);
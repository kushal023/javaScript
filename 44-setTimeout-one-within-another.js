// non-blocking function
// setTimeout will make a request to the browser an return immediately
setTimeout(
    () => {
        console.log( 'function 1 executed' );

        setTimeout(
            () => {
                console.log( 'function 2 executed' );
            },
            2000
        );
    },
    5000
);

setTimeout(
    () => {
        console.log( 'function 3 executed' );
    },
    3000
);
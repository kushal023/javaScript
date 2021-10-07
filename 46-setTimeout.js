console.log( 1 );
setTimeout( () => console.log( 2 ), 2000 );
console.log( 3 );
setTimeout( () => console.log( 4 ), 2000 );
console.log( 5 );
setTimeout(
    () => { // goes into Event Queue immediately
        console.log( 6 );

        for( let i = 0; i < 1e6; i++ ) { // 1e6 = 1 x 10^6 (1 million)
            for( let i = 0; i < 1e4; i++ ) {
                ;
            }
        }
    },
    0
);
console.log( 7 );

// waste the time of the CPU (take 5 - 10 seconds in Prashanth's computer)
for( let i = 0; i < 1e6; i++ ) { // 1e6 = 1 x 10^6 (1 million)
    for( let i = 0; i < 1e4; i++ ) {
        ;
    }
}

// Event Queue is checked for functions lined up for execution
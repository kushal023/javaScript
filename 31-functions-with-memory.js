// original function
// function configure( ipAddress, port ) {
//     return 'http://' + ipAddress + ':' + port;
// }

// let ip = '127.0.0.1';

// // level 1 of laziness
// console.log( configure( ip, 3000 ) );
// console.log( configure( ip, 4000 ) );

// let configure2 = configure.bind( null, ip );
// console.log( configure2( 5000 ) );
// console.log( configure2( 6000 ) );

// "curried" function
function configure( ipAddress ) {
    return function( port ) {
        return 'http://' + ipAddress + ':' + port;
    };
}

let f1 = configure( '127.0.0.1' );
console.log( f1( 5000 ) );
console.log( f1( 6000 ) );

let f2 = configure( '192.168.0.1' );
console.log( f2( 5000 ) );
console.log( f2( 6000 ) );
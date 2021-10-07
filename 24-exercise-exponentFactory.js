function exponentFactory( n ) {
    if( n === 2 ) {
        function square( x ) {
            return x * x;
        }

        return square;
    } else if( n === 3 ) {
        function cube( x ) {
            return x * x * x;
        }

        return cube;
    } else {
        function id( x ) {
            return x;
        };

        return id;
    }
}

let toPower2 = exponentFactory( 2 );
console.log( toPower2( 12 ) ); // 144

let toPower3 = exponentFactory( 3 );
console.log( toPower3( 4 ) ); // 64

let identity = exponentFactory( 100 ); // let identity = function( x ) { return x; }
console.log( identity( 4 ) ); // 4
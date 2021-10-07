function foo() {
    console.log( this );
}

let boundFoo = foo.bind( { x : 1 } );
boundFoo();

function sum( x, y ) {
    return x + y;
}

let addTo10 = sum.bind( null, 10 );
console.log( addTo10( 20 ) );


let getSumOf10And20 = sum.bind( null, 10, 20 );
console.log( getSumOf10And20() );
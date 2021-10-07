function f() {
    // local object
    const john = {
        name: 'John'
    }

    // local function
    function g() {
        console.log( 'i am g function' );
    }

    // function p() {
    //     console.log( 'i am p function' );
    //     return 1000;
    // }

    g();

    // return john;
    // return g;
    return function() {
        console.log( 'i am p function' );
        return 1000;
    };
}

const h = f(); // h = p
console.log( h );
let result = h(); // p()
console.log( result );

// console.log( john );
// g();
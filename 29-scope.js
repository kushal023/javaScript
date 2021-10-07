let x = 1; // global variables
let x2 = 10;

function outer() {
    let x = 2; // local x - not the same as global x
    let y = 100;
    console.log( 'x in outer = ', x ); // local x
    
    // inner functions can access
        // 1. local variables
        // 2. variables in the scope they were declared in
    function inner() {
        let x = 3;
        let z = 1000;

        console.log( 'x in inner = ', x );
        console.log( 'y in inner = ', y );
    }
    
    inner();
    // console.log( 'z in outer = ', z ); // error
}

outer();
console.log( 'global x = ', x );
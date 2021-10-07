function outer() {
    let x = 2;
    let y = 100;

    // inner functions can access
        // 1. local variables
        // 2. variables in the scope they were declared in
    function inner() { // a function "creates a closure"
        let z = 1000;
        
        console.log( 'x in inner = ', x );
        console.log( 'y in inner = ', y );
        console.log( 'z in inner = ', z );
        
        x++;
    }
    
    return inner;
}

const f = outer(); // should x (x_1) and y (y_1) exist in memory beyong this line?? - it shoudl not exist
const g = outer(); // we have a fresh set of x and y (x_2, y_2). a fresh inner() function is also created! this inner() gets access to its own x and y!

f(); // x_1 = 2
f(); // x_1 = 3
f(); // x_1 = 4

console.log( '----------' );
g();

console.log( '----------' );
f();
f();
f();
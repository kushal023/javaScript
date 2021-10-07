function sum1( x, y ) {
    return x + y;
}

const sum2 = function( x, y ) {
    return x + y;
};

// ES2015 - arrow function
const sum3 = ( x, y ) => x + y; // { return x + y; }

const sum4 = ( x, y ) => {
    let result = x + y;
    return result;
};
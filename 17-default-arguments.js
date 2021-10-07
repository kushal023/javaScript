// ES2015 - argument default
function greet( message = 'hello', name = 'world' ) {
    return message + ' ' + name + '!';
}

console.log( greet( 'Good morning', 'John' ) );
console.log( greet( 'Good morning' ) ); // message = 'Good morning', name = undefined -> 'world'
console.log( greet() ); // message = undefined -> 'hello', name = undefined -> 'world'
console.log( greet( undefined, 'John' ) ); // message = undefined -> 'hello'
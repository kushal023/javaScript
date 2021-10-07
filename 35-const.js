const x = 1;

// x = 2; // error

console.log( x );

const numbers = [ 1, 2, 3, 4 ];
// numbers = [ 1, 2, 3, 4, 5 ];

numbers.push( 5 );
console.log( numbers );

const john = {
    name: 'John',
    age: 32
};

// john = {
//     name: 'Jonathan',
//     age: 33
// };

john.age++;
john.name = 'Jonathan';

console.log( john );
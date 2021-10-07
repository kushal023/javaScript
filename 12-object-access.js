// You dont need a class to create an object
// {} creates an object in memory
let john = {
    'first name': 'John',
    age: 32,
    emails: [
        {
            email: 'john@gmail.com',
            type: 'personal'
        },
        {
            email: 'john@example.com',
            type: 'work'
        }
    ],
    address: {
        city: 'Bangalore',
        pinCode: 560101
    }
};

console.log( john );
console.log( john['first name'] );
console.log( john['first name'].length );
console.log( john.emails );
console.log( john.emails[0] );
console.log( john.emails[0].email );
console.log( john.address.city );

console.clear();

// array of keys
console.log( Object.keys( john ) );

// array of values
console.log( Object.values( john ) );

// array of [ key, value ]
console.log( Object.entries( john ) );
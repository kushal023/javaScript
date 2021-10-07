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

// change any value
john.age++;
john['first name'] = 'Jonathan';

console.log( john );
console.log( john.children ); // undefined

// you can add keys anytimes (objects are dynamic)
john.children = [
    'Jack',
    'Jill'
];
john.emails[2] = {
    email: 'john@yahoo.com',
    type: 'personal'
};

delete john.age;

console.log( john );
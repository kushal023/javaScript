// You dont need a class to create an object
// {} creates an object in memory
let jonathan = {
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
    },
    changeAddress: function( newCity, newPinCode ) { // "this" -> function context
        this.changeCity( newCity );
        this.changePinCode( newPinCode );
    },
    changeCity: function( city ) {
        this.address.city = city;
    }
};

// even methods can be added later on
jonathan.changePinCode = function( pinCode ) {
    this.address.pinCode = pinCode;
};

jonathan.changeAddress( 'Mumbai', 400100 );
console.log( jonathan );
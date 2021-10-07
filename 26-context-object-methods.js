const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() { // ES2015 syntax for methods
        console.log( this );
        // this.age++;
    }
};

john.celebrateBirthday(); // this -> john

let cb = john.celebrateBirthday;
cb(); // this -> not john! (window / global)

console.log( cb === john.celebrateBirthday ); // true -> both refer to the SAME function in memory
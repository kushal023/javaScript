const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() { // ES2015 syntax for methods
        this.age++;
    },
    setName( firstName, lastName = '' ) {
        this.name = firstName + ' ' + lastName;
    }
};

const jane = { 
    name : 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane ); // this -> jane and jane.age will increment
john.setName.call( jane, 'Janette' );
john.setName.call( jane ); // arguments are undefined
// Explore apply() - it is similar to call()



console.log( jane );

let cbJane = john.celebrateBirthday.bind( jane );
cbJane(); // john.celebrateBirthday.call( jane ); // this -> jane
cbJane();
cbJane();
cbJane();

console.log( jane );

let setJaneName = john.setName.bind( jane, 'Jane' );
setJaneName( 'Doe' );
console.log( jane );
setJaneName( 'Doherthy' );
console.log( jane );

let setJaneNameV2 = john.setName.bind( jane, 'Jane', 'Doe' );
setJaneNameV2();
console.log( jane );

let setJaneNameV3 = john.setName.bind( jane );
setJaneNameV3( 'Jennifer', 'Lopez' );
console.log( jane );
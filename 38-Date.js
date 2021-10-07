const date = new Date();
console.log( date.toLocaleDateString() );
console.log( date.toDateString() );
console.log( date.toLocaleString() );
console.log( date.toUTCString() );

const aug15 = new Date( 2021, 7 /* Jan - 0, Dec - 11 */, 15 );
console.log( aug15 );
console.log( aug15.toLocaleString() );

console.log( date.getMonth() ); // 7
console.log( date.getDay() ); // 0 - 6 (4)
console.log( date.getDate() );
console.log( date.getFullYear() );

console.log( date.getHours() );

date.setMonth( 9 ); // 9 - October
console.log( date ); // 26 October
console.log( date.getDay() );

const oneWeekFromToday = new Date(); // 26
oneWeekFromToday.setDate( oneWeekFromToday.getDate() + 7 ); // 26 + 7 = 33
console.log( oneWeekFromToday );

/* Create a date object that represents your birthDate - check the Day */
const mgBirthDate = new Date( 1869, 9, 2 );
console.log( mgBirthDate.getDay() );
/* setFullYear( 2021 ), and check if birthday is falling on the right day */
mgBirthDate.setFullYear( 2021 );
console.log( mgBirthDate.getDay() );
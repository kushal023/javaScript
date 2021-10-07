// iterator methods - they accept an iterator function as an argument

// forEach() - when you want to teratir through each item and do something with each item (for loop)
// map() - [ 1, 2, 3 ] -> [ 1, 4, 9 ]
// find() - find the first item that satisfies a given condition (returns a single item)
// filter() - find all the items that satisfies a given condition (returns an array of matched items)
// reduce() - generate a single value from the items in the array

// Explore: some(), every()

const numbers = [ 12, 23, 34, 45, 56, 67 ];
numbers.forEach(function( item, idx ) { // like a for loop
    // we can maipulate the
    console.log( idx, item );

    // return item; // return does not matter
});

const squaresOfNumbers = numbers.map(function( item, idx ) {
    return item * item;
});
console.log( squaresOfNumbers );

const numberGreaterThan30 = numbers.find(function( item ) {
    return item > 30;
});
console.log( numberGreaterThan30 );

const allNumbersGreaterThan30 = numbers.filter(function( item ) {
    return item > 30;
});
console.log( allNumbersGreaterThan30 );

// number = [ 12, 23, 34, 45, 56, 67 ];
// acc = 0, 12 -> 12 ; 12, 23 -> 35 ; 35, 34 -> 69 ; 69, 45 -> 114 ;
const numberOfOdds = numbers.reduce(function( acc, item, idx ) {
    return acc + item;
}, 0);

// typical way of working with array iterators (functional style)
const squaresOfOdds = numbers
                        .filter(function( item ) {
                            return item % 2 === 1;
                        }).map(function( item ) {
                            return item * item;
                        });
console.log( squaresOfOdds );
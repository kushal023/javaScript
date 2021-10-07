// we will be receiving data in JSON format
// we will be sending data in JSON format

// ES2015 syntax for string using backticks (``)
// let's say we get this data from the server
const emails = `
    [
        {
            "subject": "Party",
            "sender": "John Doe",
            "body": "Let's have a party to celebrate completion of Meetings app",
            "read": false
        },
        {
            "subject": "Project discussion",
            "sender": "Jane Doe",
            "body": "Discuss requirements for upcoming project",
            "read": false
        }
    ]
`;

// console.log( emails ); // string

// JSON formatted string -> JS equivalent
const emailsObj = JSON.parse( emails );
emailsObj[1].read = true;
console.log( emailsObj ); // array

// JS object / array -> JSON formatted string
const emailStrToBeSent = JSON.stringify( emailsObj, null, 4 );
console.log( emailStrToBeSent );
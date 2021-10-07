const id = setTimeout(() => {
    console.log( 'function executed' );
},5000);

setTimeout(() => {
    console.log( 'about to clear timer' );
    // the alarm clock is turned off
    clearTimeout( id );
}, 2000);
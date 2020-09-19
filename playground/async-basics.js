console.log('Starting app');

setTimeout(()=>{
    console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
    console.log('Second timeout works');
}, 0)


console.log('Finishing app');

// (1) Call stack; (2) Node APIs; (3) Callback queue; (4) Event lopp

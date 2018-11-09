const exec = require('child_process').exec;
const cmd_1 = 'ls';
const cmd_2 = 'cd asd';

function echo(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (stderr) reject(stderr)       

            resolve(stdout);
        });
        
    });
}

// Run async
console.log("*** Run async ***");
echo(cmd_1).then((res) => {
    console.log("stdout :\n", res);


}).catch(function (rej) { //rej = error
    console.error('ERROR: ', rej);
});

echo(cmd_2).then((res) => { 
    console.log("stdout :\n", res);


}).catch(function (rej) { //rej = error
    console.error('ERROR: ', rej);
});

// Run sync
echo(cmd_1).then((res) => { 
    console.log("*** Run sync ***");
    console.log("stdout :\n", res);

    echo(cmd_2).then((res) => { 
        console.log("stdout :\n", res);
    
    
    }).catch(function (rej) { //rej = error
        console.error('ERROR: ', rej);
    });


}).catch(function (rej) { //rej = error
    console.error('ERROR: ', rej);
});
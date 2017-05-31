"use strict";

const spawn = require('child_process').spawn;

let promiseFromChildProcess = (child) => {
    return new Promise((resolve, reject) => {
        child.addListener("error", reject);
        child.addListener("exit", resolve);
    });
}


module.exports = (fn) => {
    let child = spawn('which', ['node']);
    promiseFromChildProcess(child).then((result) => {});
    child.stdout.on('data', (data) => {
	fn(null, data.toString('utf8').split("\n")[0]);
    });
    child.stderr.on('data', (data) => {
	let decoded = data.toString('utf8');
	fn(data);
    })
}







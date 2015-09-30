#!/usr/bin/nodejs

var argv = require("yargs").argv;

if(! argv.cmd){
    console.log("you have not supply a command");
    process.exit(1);
}

var childProcess = require('child_process');

 ls = childProcess.exec(argv.cmd, function (error, stdout, stderr) {
   if (error) {
     console.log(error.stack);
     console.log('Error code: '+error.code);
     console.log('Signal received: '+error.signal);
   }
   console.log('Child Process STDOUT: '+stdout);
   console.log('Child Process STDERR: '+stderr);
 });

 ls.on('exit', function (code) {
   console.log('Child process exited with exit code '+code);
 });

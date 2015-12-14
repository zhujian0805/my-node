#!/usr/bin/env node
var argv = require('yargs').argv;
 
if(!argv.ships || !argv.distance){
    console.log('you input does not contains ships or distance');
}else{
    console.log('you input: ' + argv.ships + " " + argv.distance);
}

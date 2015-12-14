#!/usr/bin/env node
var argv = require('yargs')
    .array('foo')
    .argv;

console.log(argv.foo)

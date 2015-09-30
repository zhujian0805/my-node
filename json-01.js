#!/usr/bin/nodejs

var obj = JSON.parse('{"hello": "world", "data": [ 1, 2, 3 ] }');
console.log(obj.data);
console.log(obj.hello);
console.log(obj.data[0]);

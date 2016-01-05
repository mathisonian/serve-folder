#!/usr/bin/env node

var Serve = require('..');

var args = process.argv.slice(2);

var p = '.';
if(args.length) {
  p = args[0];
}

var port = 1313;
if(args.length > 1) {
  port = args[1];
}

Serve(p, port);

console.log('Server started on port ' + port);

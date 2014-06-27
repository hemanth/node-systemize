#!/usr/bin/env node

var systemize = require('./index');
var pkg = require('./package.json');
var input = process.argv[2];

function help() {
    'use strict';
    console.log(pkg.description);
    console.log('');
    console.log('Usage');
    console.log(' $ systemize <path>');
    console.log('');
    console.log('Example');
    console.log(' $ systemize .');
}

if (process.stdin.isTTY) {
    if (!input) {
        help();
        return;
    }
    if (input === '-v') {
        console.log(pkg.version);
        return;
    }
    if (input === '-h') {
        help();
        return;
    }
    systemize(input, function(err, done) {
        'use strict';
        if (err) {
            console.error(err);
        } else {
            console.log(done);
        }
    });
}
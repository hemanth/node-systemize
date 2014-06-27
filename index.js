module.exports = function(dir, cb) {
    'use strict';
    if (!cb) {
        throw new Error('Callback is a must!');
    }
    var globby = require('globby');
    var fs = require('fs-extra');
    var join = require('path').join;

    var imgs = [
        '*.jpg',
        '*.png',
        '*.gif'
    ];

    var docs = [
        '*.txt',
        '*.pdf',
        '*.docs',
        '*.pdf',
        '*.ppt',
        '*.odt',
        '*.xls',
        '*.odt'
    ];

    var music = [
        '*.mp3',
        '*.wav',
        '*.oga',
        '*.mp4'
    ];

    var organise = function(args) {
        globby(args.type, function(err, paths) {
            if (err) {
                cb(err, null);
            }
            if (paths.length > 1) {
                fs.ensureDir(args.dir, function(err) {
                    if (err) {
                        cb(err, null);
                    }
                    paths.forEach(function(path) {
                        fs.move(path, join(args.dir, '/' + path), function(err) {
                            if (err) {
                                cb(err, null);
                            }
                        });
                    });
                    cb(null, 'Done!');
                });
            }
        });
    };

    var pwd = process.cwd();

    if (!fs.existsSync(dir)) {
        cb('dir not found!', null);
    }
    process.chdir(dir);
    organise({
        type: imgs,
        dir: 'images'
    });
    organise({
        type: music,
        dir: 'music'
    });
    organise({
        type: docs,
        dir: 'documents'
    });

    process.chdir(pwd);

};
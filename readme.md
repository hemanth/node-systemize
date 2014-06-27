# systemize

> Systemize your junkyard. (Organise your files.)

__FROM:__

![](http://h3manth.com/i/from.png)


__TO:__

![](http://h3manth.com/i/to.png)


## Install

```sh
$ npm install -g systemize
```

## Usage

##### Node.js


```javascript
var systemize = require('systemize');
systemize(path, function(err, done) {
    'use strict';
    if (err) {
        console.error(err);
    } else {
        console.log(done);
    }
});
```

##### CLI

```sh
$ node cli.js -v
0.1.0

$ node cli.js -h
Systemize the chaos.

Usage
 $ systemize <path>

Example
 $ systemize .
```

## License

MIT © [Hemanth.HM](http://h3manth.com)

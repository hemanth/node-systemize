module.exports = function(){
	var globby = require('globby');
    var fs = require('fs-extra');
    var mv = require('mv');

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
		'*.oga'
	];

	globby(imgs, function (err, paths) {
		paths.forEach(function(path){
			path = path.replace('\\','/');
			console.log(path);
			fs.rename(path, "images",function(err){
				console.log(err);
			});
		});
    });
}
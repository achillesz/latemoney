
var fs = require('fs');
var path = require('path');

var main = {
	getNames: function (callback) {
		fs.readFile(path.join(__dirname, 'names.json'), 'utf-8', function (err, data) {
			if(data) {
				names = JSON.parse(data);
				callback(names);

			} else {
				console.log(err);
			}
		});
	}
};

modules.exports = main;
 




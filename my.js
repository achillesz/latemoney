

var belate = require('./belate');
var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, 'weekend.json'), 'utf-8', function (err, data) {
	if(data) {
		var data1 = JSON.parse(data);
		var ret = [];
		
		for(var i in data1) {
			ret = ret.concat(data1[i]);	
		}
		
		var sum = belate.getSumMoney(ret);
		console.log(sum);
		
	} else {
		console.log(err);
	}
});



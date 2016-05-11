
var Price = require('./price.js');
var fs = require('fs');
var path = require('path');

// 想要把文件读取模块抽出去，但是发现是异步的，require 拿不到异步的 export

var names;
fs.readFile(path.join(__dirname, 'names.json'), 'utf-8', function (err, data) {
	if(data) {
		names = JSON.parse(data);
	
	} else {
		console.log(err);
	}
});

exports.getSumMoney = function (data) {
	for(var i = 0, len = data.length; i < len; i++) {
		var type = this.getType(data[i]);
		switch (type) {
			case 'qa':
				this.qa.push(data[i]);
				break;
			case 'dev':
				this.dev.push(data[i]);
				break;
			case 'fe':
				this.fe.push(data[i]);
				break;
		}
	}
	
	return this.getQaPrice() + this.getDevPrice() + this.getFePrice();
};

exports.qa = [];
exports.dev = [];
exports.fe = [];

exports.getQaPrice = function () {
	var price = new Price(names.qa.price, this.qa.length);	
	
	return price.getSumPrice();
};

exports.getDevPrice = function () {
	var price = new Price(names.dev.price, this.dev.length);

	return price.getSumPrice();
};

exports.getFePrice = function () {
	var price = new Price(names.fe.price, this.fe.length);

	return price.getSumPrice();
};

exports.getType = function (name) {
	var l = names.qa.names.length;
	while (l--) {
		if(names.qa.names[l].indexOf(name) >= 0) {
			return 'qa'
		}
	}
	
	var i = names.dev.names.length;
	while (i--) {
		if(names.dev.names[i].indexOf(name) >= 0) {
			return 'dev'
		}
	}

	var n = names.fe.names.length;
	while (n--) {
		if(names.fe.names[n].indexOf(name) >= 0) {
			return 'fe'
		}
	}
};






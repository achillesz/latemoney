
function Price(price, count) {
	this.price = price;
	this.count = count;
}

Price.prototype.getSumPrice = function () {
	return this.price * this.count;	
};


module.exports = Price;
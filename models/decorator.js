const Decorator = function() {
    this.paintStock = [];
};

Decorator.prototype.addCan = function(paintCan) {
    this.paintStock.push(paintCan);
};

module.exports = Decorator;
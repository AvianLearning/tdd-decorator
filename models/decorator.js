const Decorator = function() {
    this.paintStock = [];
};

Decorator.prototype.addCan = function(paintCan) {
    this.paintStock.push(paintCan);
};

Decorator.prototype.calculateLitres = function(paintStock) {
    let totalLitres = 0;
    for (paint of paintStock) {
        totalLitres += paint.litres;
    };
    return totalLitres;
};

module.exports = Decorator;
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

Decorator.prototype.enoughPaint = function(area, paintStock) {
    let totalLitres = this.calculateLitres(this.paintStock);
    if (totalLitres >= area) {
        return true;
    };
    return false;
};

Decorator.prototype.paintRoom = function () {
    if (this.enoughPaint(room.area, this.paintStock)) {
        room.paintedRoom();
    }
}

module.exports = Decorator;
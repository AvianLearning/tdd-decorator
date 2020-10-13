const Paint = function (litres) {
    this.litres = litres;
};

Paint.prototype.isEmpty = function() {
    if (this.litres === 0) {
        return true;
    };
    return false;
}

Paint.prototype.canEmptySelf = function() {
    remainingPaint = this.litres - this.litres;
    return remainingPaint;
}

module.exports = Paint;
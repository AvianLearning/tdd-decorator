const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator(0);
        paintCan = new Paint(2);
    })
    it('should have empty paint stock', function() {
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 0);
    });

    it('should be able to add can to paint stock', function() {
        decorator.addCan(paintCan);
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1);
    })

});
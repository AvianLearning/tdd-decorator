const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator(0);
        paintCan = new Paint(2);
        room = new Room(40);
    })
    it('should have empty paint stock', function() {
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 0);
    });

    it('should be able to add can to paint stock', function() {
        decorator.addCan(paintCan);
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1);
    });

    it('should be able to calculate total litres in stock', function() {
        decorator.addCan(paintCan);
        decorator.addCan(paintCan);
        decorator.addCan(paintCan);
        decorator.addCan(paintCan);
        const actual = decorator.calculateLitres(decorator.paintStock);
        assert.strictEqual(actual, 8);
    });

    it('should be able to calculate has enough paint to paint a room', function() {
        const actual = decorator.enoughPaint(room.area, decorator.paintStock);
        assert.strictEqual(actual, false);
    });
    
});
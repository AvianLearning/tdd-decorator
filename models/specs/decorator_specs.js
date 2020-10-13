const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator(0);
    })
    it('should have empty paint stock', function() {
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 0);
    });

    it('should be able to add can to paint stock', function() {
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1);
    })

});
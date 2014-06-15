var inherits = require('inherits');
var assert = require('chai').assert;

function A() {}
function B() {}
function C() {}

describe('inherits', function () {
    it('is a function', function (){
        assert.typeOf(inherits, 'function');
    });
    it('can inherit from one thing', function () {
        function Thing() {}
        inherits(Thing, A);
        var t = new Thing();
        assert.instanceOf(t, Thing);
        assert.instanceOf(t, A);
    });
});

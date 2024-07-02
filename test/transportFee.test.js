
describe('transport fee test', function () {
    it('It should get correct morning transport fee', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('It should get correct afternoon transport fee', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('It should get correct nightshift transport fee', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });

});


describe('countRegNumber test', function () {
    it('Checks for length of an array', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

});
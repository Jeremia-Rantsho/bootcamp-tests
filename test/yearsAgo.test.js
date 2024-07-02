
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

describe('yearsAgo test', function () {
    it('It should get correct year difference', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

});
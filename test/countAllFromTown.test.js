
describe('countAllFromTown test', function () {
    it('It should get correct count from Stellies', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3)
    });

    it('It should get correct count from Kuilsriver', function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1)
    });

    it('empty string test', function () {
        var fromKuilsriver = countAllFromTown('');
        assert.equal(fromKuilsriver, undefined)
    });

});
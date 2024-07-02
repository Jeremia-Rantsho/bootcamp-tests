
describe('countAllPaarl test', function(){
    it('It should get correct count of Paarl reg', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('empty string test', function () {
        var Paarl = countAllPaarl('');
        assert.equal(Paarl, 0)
    });

});
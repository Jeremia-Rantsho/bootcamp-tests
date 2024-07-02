
describe('From Where test', function () {
    it('Testing registration from Bellville', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });

    it('Testing registration from Paarl', function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it('Testing registration from Cape Town', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it('Testing registration from some other places', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
   
});
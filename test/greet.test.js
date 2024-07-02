

describe('greet test' , function(){
    it('It should greet the name correctly' , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

    it('greet testing empty input' , function(){
        assert.equal(greet(''), 'please add name');
    });

});
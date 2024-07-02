
describe('Phone bill test', function () {
    it('Testing correct billing for different phone transaction', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('Testing for sms billing', function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});


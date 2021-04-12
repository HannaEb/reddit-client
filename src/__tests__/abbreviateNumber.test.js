import abbreviateNumber from '../utils/abbreviateNumber';

describe('abbreviateNumber', () => {
    it('abbreviates a given number', () => {
        expect(abbreviateNumber(1000)).toMatch('1.0K'); 
        expect(abbreviateNumber(2345678)).toMatch('2.3M');
        expect(abbreviateNumber(499)).toMatch('499');
    });
});

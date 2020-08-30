import Util from '../../app/shared/services/util.service';

describe('Function: addThousandSeparator', () => {
    it('Should format correctly format a value', () => {
        expect(Util.addThousandSeparator(1)).toBe('1,00');
        expect(Util.addThousandSeparator(1, 0)).toBe('1');
        expect(Util.addThousandSeparator(1.1)).toBe('1,10');
        expect(Util.addThousandSeparator(1.1, 1)).toBe('1,1');
        expect(Util.addThousandSeparator(1234.1, 1)).toBe('1.234,1');
    });
});

describe('Function: toBRL', () => {
    it ('Should correctly format a number to R$', () => {
        expect(Util.toBRL(12.34)).toEqual('R$ 12,34');
        expect(Util.toBRL(45.6789)).toEqual('R$ 45,68');
        expect(Util.toBRL(45.6712)).toEqual('R$ 45,67');
        expect(Util.toBRL(123.4)).toEqual('R$ 123,40');
        expect(Util.toBRL(56)).toEqual('R$ 56,00');
        expect(Util.toBRL(7890.12)).toEqual('R$ 7.890,12');
        expect(Util.toBRL(12345678.90)).toEqual('R$ 12.345.678,90');
    });
});

describe('Function: getRandomNumber', () => {
    it ('Should generate a random number between 2 values', () => {
        const randomNumber: number = Util.getRandomNumber(10, 1);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
    });
});

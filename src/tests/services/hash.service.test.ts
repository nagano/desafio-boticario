import Hash from '../../app/shared/services/hash.service';

describe('Function: toSHA1', () => {
    it ('Should return a text encrypted to SHA1', () => {
        const testHash = '40bd001563085fc35165329ea1ff5c5ecbdbbeef';
        expect(Hash.toSHA1('123')).toEqual(testHash);
    });
});

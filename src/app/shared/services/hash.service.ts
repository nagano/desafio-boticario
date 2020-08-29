import SHA1 from 'crypto-js/sha1';

export default {

    toSHA1(text: string): string {
        return SHA1(text).toString();
    }

};

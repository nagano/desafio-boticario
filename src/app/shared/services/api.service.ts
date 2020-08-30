// Services
import Hash from './hash.service';
// Models
import { User } from '../models/user.model';

export default {

    login(email: string, password: string): Promise<null> {
        console.log('Loggin in with credentials:');
        console.log(`E-mail: ${email}`);
        console.log(`SHA1 encrypted password: ${Hash.toSHA1(password)}`);

        return new Promise((resolve, reject) => {
            randomTimeout(() => {
                resolve();
            });
        });
    },

    signUp(user: User): Promise<null> {
        console.log('Registering user:');
        console.log(`Name: ${user.name}`);
        console.log(`CPF: ${user.cpf}`);
        console.log(`E-mail: ${user.email}`);
        console.log(`SHA1 encrypted password: ${Hash.toSHA1(user.password)}`);

        return new Promise((resolve, reject) => {
            randomTimeout(() => {
                resolve();
            });
        });
    },

    listOrders(): Promise<null> {
        console.log('Listing user orders');

        return new Promise((resolve, reject) => {
            randomTimeout(() => {
                resolve();
            });
        });
    },

    getTotalCashback(): Promise<null> {
        console.log("Get user's total cashback");

        return new Promise((resolve, reject) => {
            randomTimeout(() => {
                resolve();
            });
        });
    }

};

/**
 * Return a random INT between max(inclusive) and min(inclusive) values.
 * @param {number} max 
 * @param {number} min 
 * @returns {number}
 */
const getRandomNumber = (max: number, min: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * setTimeout function with random time (between 250ms and 1500ms) for callback.
 * @param callback 
 */
const randomTimeout = (callback: () => void) => {
    setTimeout(() => {
        callback();
    }, getRandomNumber(250, 1500));
};


class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.table = [];
    }

    generateTable() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let row = this.alphabet.slice(i);
            row += this.alphabet.slice(0, i);
            this.table.push(row);
        }
    }

    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        if (arguments.length !== 2) {
            throw new Error();
        }
        let encryptResult = '';
        for (let i = 0; key.length < message.length; i++) {
            key += key[i];
        }
        this.generateTable();
        let index2 = 0;
        for (let index = 0; index < message.length; index++) {
            let rowIndex = this.alphabet.indexOf(message[index]);
            let columnIndex = this.alphabet.indexOf(key[index2]);
            if (rowIndex === -1) {
                encryptResult += message[index];
            } else {
                encryptResult += this.table[rowIndex][columnIndex];
                index2++;
            }
        }
        return this.mode ? encryptResult : encryptResult.split('').reverse().join('');
    }

    decrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        if (arguments.length !== 2) {
            throw new Error();
        }
        let decryptResult = '';
        for (let i = 0; key.length < message.length; i++) {
            key += key[i];
        }
        this.generateTable();
        let index2 = 0;
        for (let index = 0; index < message.length; index++) {
            let i = this.alphabet.indexOf(key[index2]);
            let j = this.table[i].indexOf(message[index]);
            if (j === -1) {
                decryptResult += message[index];
            } else {
                decryptResult += this.alphabet[j];
                index2++;
            }
        }
        return this.mode ? decryptResult : decryptResult.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
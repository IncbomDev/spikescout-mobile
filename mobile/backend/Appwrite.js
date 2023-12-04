import { Client, Account } from 'appwrite';

const appwrite = require('appwrite');
const client = new Client();
const account = new Account(client);
const teams = new Teams(client);

client
    .setEndpoint('http://103.195.102.32:49302/v1')
    .setProject('656cccabc3aa6e60a98c');

function getUser() {
    return account.get();
}

function createAccount(email, password, name) {
    let id = Date.now();
    return account.create(id, email, password, name);
} 
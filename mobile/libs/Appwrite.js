import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://major-jointly-sparrow.ngrok-free.app/v1')
    .setProject('654c0d763c4ded4d583b'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

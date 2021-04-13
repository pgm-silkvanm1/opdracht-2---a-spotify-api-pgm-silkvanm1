import faker from 'faker';
import UserDb from '../lib/userDb.js';

const userSeeding = new UserDb;

const seeder = async () => {
    for (let i=0; i<5; i++) {
        const name = faker.name.firstName();
        const username = faker.name.firstName();
        const email = faker.internet.email();
        const admin = false;
        const password = faker.internet.password();
        await userSeeding.add(name, username, email, admin, password);
    }
}

seeder();
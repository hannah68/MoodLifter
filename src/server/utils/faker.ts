import { faker } from '@faker-js/faker';

export const fakeUsers = () => {
    const fakeUsername = faker.internet.userName();
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();

    const initUsers = {
        username : fakeUsername,
        email: fakeEmail,
        password: fakePassword
    }
    
    return initUsers;
}
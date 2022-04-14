import { faker } from "@faker-js/faker";

export const fakeUsers = () => {
	const fakeUsername = faker.internet.userName();
	const fakeEmail = faker.internet.email();
	const fakePassword = faker.internet.password();

	const initUsers = {
		username: fakeUsername,
		email: fakeEmail,
		password: fakePassword,
	};

	return initUsers;
};

export const fakeProfile = (userId: number) => {
	const fakedProfilePicture = faker.image.avatar();

	const fakedProfile = {
		userId: userId,
		profilePicture: fakedProfilePicture,
	};

	return fakedProfile;
};

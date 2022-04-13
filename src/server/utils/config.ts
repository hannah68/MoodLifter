export const NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE = 10;

export const HTTP_RESPONSE = {
    OK: {MESSAGE: 'OK SUCCESSFUL', CODE: 200},
    INTERNAL_ERROR: {MESSAGE: 'Internal server error', CODE: 500},
    UNAUTHORIZED: { MESSAGE: 'Unauthorized', CODE: 401},
    NOT_FOUND: { MESSAGE: 'Not found', CODE: 404},
}

export const SECRET = process.env.SECRET as string;
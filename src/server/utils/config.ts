export const NUMBER_OF_USER_TO_GENERATE = 10;

export const HTTP_RESPONSE = {
    OK: {MESSAGE: 'OK SUCCESSFUL', CODE: 200},
    INTERNAL_ERROR: {MESSAGE: 'Internal server error', CODE: 500},
    UNAUTHORIZED: { MESSAGE: 'Unauthorized', CODE: 401},
}

export const SECRET = process.env.SECRET as string;
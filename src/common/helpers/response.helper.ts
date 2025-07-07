export function success<T>(data: T, message = 'Success') {
    return {message, data};
}

export function error(message: string, statusCode = 400) {
    return {message, statusCode}
}
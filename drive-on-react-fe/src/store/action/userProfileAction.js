export const setSessionToken = (sessionToken) => {
    return {
        type: 'SET_SESSION_TOKEN',
        payload: sessionToken
    };
};

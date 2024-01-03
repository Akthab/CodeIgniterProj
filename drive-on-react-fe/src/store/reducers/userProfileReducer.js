const initialState = {
    sessionToken: ''
};

const userProfileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_SESSION_TOKEN':
            return {
                ...state,
                sessionToken: payload
            };
    }
};

export default userProfileReducer;

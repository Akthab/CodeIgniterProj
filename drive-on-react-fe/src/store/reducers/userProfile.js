import { createSlice } from '@reduxjs/toolkit';

export const userProfile = createSlice({
    name: 'userProfile',
    initialState: {
        sessionToken: ''
    },
    reducers: {
        setSessionToken: (state, action) => {
            return {
                ...state,
                sessionToken: action.payload
            };
        }
    }
});

export const { setSessionToken } = userProfile.actions;

export default userProfile.reducer;

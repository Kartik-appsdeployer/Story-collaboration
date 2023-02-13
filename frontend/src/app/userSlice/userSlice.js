import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    User: [
        
    ]
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.User.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = UserSlice.actions

export default UserSlice.reducer
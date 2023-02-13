import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Story: [

    ]
}


export const StorySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setStory: (state, action) => {
            state.Story.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setStory } = StorySlice.actions

export default StorySlice.reducer
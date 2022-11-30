import { createSlice,  } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projects",
    initialState :[{
        "name": ["project"]
    }],
    reducers:{
        addFavoris: (state, project) => {
            state.push(project)
        },
        removeFavoris: (state, project) => {
            state = state.filter((t) => t.name !== project.name)
        }
    }
})

export const { addFavoris, removeFavoris } = projectSlice.actions

export const store = configureStore({
    reducer: {
        projects: projectSlice.reducer,
    }
})


export default projectSlice
import { configureStore, createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice ({
    name: "projects",
    initialState : [],
    reducers: {
        getProject: (state) => {
            // state : tableau actuel
            // action : url

            const projects = fetch('https://framagit.org/api/v4/projects?membership=true', {
                method: 'get',
                headers: new Headers({
                  'PRIVATE-TOKEN' : 'glpat-auESVMAxA27xgNFpu11w',
                  'Accept' : 'application/json'
                })
              })
              .then((response) => response.json())
              
              
            console.log(projects)

            projects.forEach(project => {
                state.push(project)
            })
        },
    }
})

export const store = configureStore({
    reducer: {
        todo: projectSlice.reducer
    }
})
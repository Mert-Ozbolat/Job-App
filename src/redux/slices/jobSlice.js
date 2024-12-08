import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: true,
    error: null,
    job: []
}


const jobSlice = createSlice({
    name: "job",
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => { },
        setError: (state, action) => { },
        setJobs: (state, action) => { },
    }
})


export const { setLoading, setError, setJobs } = jobSlice.actions
export default jobSlice.reducer
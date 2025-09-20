import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch jobs from Greenhouse Job Board API
export const fetchGreenhouseJobs = createAsyncThunk(
  'jobs/fetchGreenhouseJobs',
  async (boardToken, thunkAPI) => {

    try {
      // const boardToken = "triplebyte";
      const response = await fetch(
        `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      // data.jobs is array of jobs objects :contentReference[oaicite:2]{index=2}
      return data.jobs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreenhouseJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGreenhouseJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchGreenhouseJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default jobsSlice.reducer;
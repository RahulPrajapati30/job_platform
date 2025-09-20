import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage (if exists)
const loadState = () => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
    return { 
      users, 
      currentUser, 
      isAuthenticated: !!currentUser   // 👈 check if already logged in
    };
  } catch (err) {
    return { users: [], currentUser: null, isAuthenticated: false };
  }
};

const initialState = loadState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;   // 👈 login success
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;  // 👈 login fail
        localStorage.removeItem("currentUser");
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;    // 👈 logout
      localStorage.removeItem("currentUser");
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

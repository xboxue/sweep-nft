import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AuthState {
  account: string | null;
}

const initialState: AuthState = { account: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string | null>) => {
      state.account = action.payload;
    },
  },
});

export const selectAccount = (state: RootState) => state.auth.account;

export const { setAccount } = authSlice.actions;

export default authSlice.reducer;

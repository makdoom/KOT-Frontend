import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AuthType = {
  sessionid: number;
  userid: number;
  locationid: number;
  clientid: number;
  roleid: number;
  message: string;
};

const initialState: { session: AuthType | null } = {
  session: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthType>) => {
      console.log("from", action.payload);
      state.session = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;

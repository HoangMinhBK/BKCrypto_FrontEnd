import { createSlice } from "@reduxjs/toolkit";
import { LS } from "src/constants";

const bip39 = require("bip39");
const HDKey = require("hdkey");

const initialState = {
  account: undefined,
  role: "user",
  mnemonic: undefined,
  publicKey: localStorage.getItem(LS.PUBLIC_KEY),
  privateKey: localStorage.getItem(LS.PRIVATE_KEY),
  password: localStorage.getItem(LS.PASSWORD),
};

export const toggleRole = () => (dispatch) => {
  dispatch(toggleRoleSuccess());
};

export const generatePairKeys = () => (dispatch) => {
  const mnemonic = bip39.generateMnemonic();
  const hdkey = HDKey.fromMasterSeed(Buffer.from(mnemonic, "hex"));
  localStorage.setItem(LS.PUBLIC_KEY, hdkey.publicExtendedKey);
  localStorage.setItem(LS.PRIVATE_KEY, hdkey.publicExtendedKey);
  dispatch(generateMnemonic12PhrasesSuccess({ mnemonic: mnemonic }));
  dispatch(
    generatePublicKeyAndPrivateKeySuccess({
      publicKey: hdkey.publicExtendedKey,
      privateKey: hdkey.privateExtendedKey,
    })
  );
};

export const createNewPassword = (password) => (dispatch) => {
  localStorage.setItem(LS.PASSWORD, password);
  dispatch(createNewPasswordSuccess({ password: password }));
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState: initialState,
  reducers: {
    toggleRoleSuccess: (state) => {
      if (state.role === "user") state.role = "admin";
      else if (state.role === "admin") state.role = "user";
    },
    generateMnemonic12PhrasesSuccess: (state, action) => {
      state.mnemonic = action.payload.mnemonic;
    },
    generatePublicKeyAndPrivateKeySuccess: (state, action) => {
      state.publicKey = action.payload.publickey;
      state.privateKey = action.payload.privateKey;
    },
    createNewPasswordSuccess: (state, action) => {
      state.password = action.payload.password;
    },
  },
});

export default accountSlice.reducer;
export const {
  toggleRoleSuccess,
  generateMnemonic12PhrasesSuccess,
  generatePublicKeyAndPrivateKeySuccess,
  createNewPasswordSuccess,
} = accountSlice.actions;

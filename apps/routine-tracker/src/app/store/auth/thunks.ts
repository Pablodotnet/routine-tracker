import {
  loginWithEmailAndPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers';
import { LoginParams, RegisterParams } from '../../types';
import { AppDispatch } from '../store';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log('🚀 ~ file: thunks.ts:16 ~ return ~ result:', result);
    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }
    return dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: RegisterParams) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) {
      return dispatch(logout({ errorMessage }));
    }
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({
  email,
  password,
}: LoginParams) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, displayName, errorMessage } =
      await loginWithEmailAndPassword({ email, password });
    console.log({ ok, uid, photoURL, displayName, errorMessage });
    if (!ok) {
      return dispatch(logout({ errorMessage }));
    }
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";

//? Reducers
import authReducer from "./slices/auth.slice";
import counterReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";

import api from "@/services/api";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);
const counterPersistedReducer = persistReducer(persistConfig, counterReducer);
const userPersistedReducer = persistReducer(persistConfig, userReducer);

//? Actions
export * from "./slices/counter.slice";
export * from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    counter: counterPersistedReducer,
    user: userPersistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export default store;

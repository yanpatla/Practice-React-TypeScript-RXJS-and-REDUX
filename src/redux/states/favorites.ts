import { localStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: localStorageTypes.FAVORITES,
  initialState: localStorage.getItem(localStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string)
    : initialState,

  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageTypes.FAVORITES, state);
      return action.payload;
    },
  },
});


export const {addFavorite} = favoritesSlice.actions
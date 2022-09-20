import { localStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: localStorageTypes.PEOPLE,
  initialState: localStorage.getItem(localStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(localStorageTypes.PEOPLE) as string)
    : initialState,

  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(localStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;

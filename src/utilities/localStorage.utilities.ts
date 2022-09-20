export const setLocalStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

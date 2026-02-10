export const refreshPage = () => {
  window.location.reload();
};

export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = (key: string) => {
  const value =  localStorage.getItem(key)
  if(!value) {
    return null;
  }
  return JSON.parse(value);
};
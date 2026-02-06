export const refreshPage= () =>  {window.location.reload();}

export const setLocalStorage = (key : string, value : unknown) => { 
    localStorage.setItem(key, JSON.stringify(value));
 }
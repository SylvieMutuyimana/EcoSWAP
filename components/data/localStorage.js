const localStorageUser = "EcoSWAP_mobile_user";
const recentPage = "recentPage";

export const getPropsFromLocalStorage = (type) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return JSON.parse(localStorage.getItem(type));
  } else {
    return null;
  }
};

export const setLocalStorageProp_ = (type, value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(type, JSON.stringify(value));
  }
};

export const getUserFromLocalStorage = () => getPropsFromLocalStorage(localStorageUser);
export const getUserTypeFromLocalStorage = () => getPropsFromLocalStorage('userType');
export const getLocalRecentPage = () => getPropsFromLocalStorage(recentPage);
export const getLoggerUserTypeFromLocalStorage = () => getPropsFromLocalStorage('loggedUserType');
export const getLoggerUserFromLocalStorage = () => getPropsFromLocalStorage('loggedUser');
export const checksecondTimeUser = () => getPropsFromLocalStorage('secondTimeUser');

export const setLocalStorageUser = (value) => setLocalStorageProp_(localStorageUser, value);
export const setLocalStorageUserType = (value) => setLocalStorageProp_('userType', value);
export const setLocalRecentPage = (value) => setLocalStorageProp_(recentPage, value);
export const setLoggedLocalStorageUserType = (value) => setLocalStorageProp_('loggedUserType', value);
export const setLoggedLocalStorageUser = (value) => setLocalStorageProp_('loggedUser', value);
export const setsecondTimeUser = (value) => setLocalStorageProp_('secondTimeUser', value);
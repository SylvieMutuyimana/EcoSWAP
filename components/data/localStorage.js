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

export const setLocalStorageUser = (value) => setLocalStorageProp_(localStorageUser, value);
export const setLocalStorageUserType = (value) => setLocalStorageProp_('userType', value);
export const setLocalRecentPage = (value) => setLocalStorageProp_(recentPage, value);
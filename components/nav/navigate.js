import { getLoggerUserTypeFromLocalStorage, setLocalStorageUser, setLocalStorageUserType, setLoggedLocalStorageUser, setLoggedLocalStorageUserType } from "../data/localStorage"

export const LogOut = ()=>{
    console.log('to log out user: ', getLoggerUserTypeFromLocalStorage())
    setLocalStorageUserType(null)
    setLoggedLocalStorageUserType(null)
    setLoggedLocalStorageUser(null)
    setLocalStorageUser(null)
    console.log('logged out user: ', getLoggerUserTypeFromLocalStorage())
}
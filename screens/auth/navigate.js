import { setLocalStorageUser, setLocalStorageUserType, setLoggedLocalStorageUser, setLoggedLocalStorageUserType } from "../../components/data/localStorage";
export const setUserType = (userType)=>{
    setLocalStorageUserType(userType)
}
export const logUser = (userType) => {
    console.log("userType on logUser: ", userType)
    setUserType(userType);
    setLoggedLocalStorageUserType(userType)
    if (userType === "seller") {
        return('SellerLoading')
    } else {
        return('BuyerLoading')
    }
}
export const unauthoriseUser = (userType) => {
    console.log("userType on unauthoriseUser: ", userType)
    return(logUser(userType))
}

export const authoriseUser = (userType, userData) => {
    setLoggedLocalStorageUser(userData)
    setLocalStorageUser(userData)
    return(logUser(userType))
}
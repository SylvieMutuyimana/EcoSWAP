import { setLocalStorageUser, setLocalStorageUserType } from "../../components/data/localStorage";

export const logUser = (userType) => {
    setLocalStorageUserType(userType);
    if (userType === "seller") {
        return('SellerLoading')
    } else {
        return('BuyerLoading')
    }
}

export const unauthoriseUser = (userType) => {
    return(logUser(userType))
}

export const authoriseUser = (userType, userData) => {
    setLocalStorageUser(userData)
    return(logUser(userType))
}

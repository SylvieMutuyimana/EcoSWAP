//auth Page
import StartingPage1 from "./screens/auth/StartingPage1";
import StartingPage2 from "./screens/auth/StartingPage2";
import Welcome from "./screens/auth/Welcome";
import Login from "./screens/auth/Login";
import CreateAccount from "./screens/auth/CreateAccount";
import Pin from "./screens/auth/Pin";

//buyer pages
import HOME from "./screens/HOME";
import CATEGORIES from "./screens/CATEGORIES";
import CATEGORIES1 from "./screens/CATEGORIES1";
import CART from "./screens/CART";
import PROFILE from "./screens/PROFILE";

//seller pages
import HOMES from "./screens/HOMES";
import MYITEMS from "./screens/MYITEMS";
import PROFILES from "./screens/PROFILES";

import SelluploadItems from "./screens/SelluploadItems";
import SELL from "./screens/SELL";
import CATEGORIES2 from "./screens/CATEGORIES2";
import Loading from "./screens/auth/Loading";
import LoadingS from "./screens/auth/LoadingS";
import Item2 from "./screens/Item2";
import Item11 from "./screens/Item11";
import About from "./components/About";
import Menu1 from "./components/Menu1";
import Search from "./screens/Search";
import Item from "./screens/Item";
import Item1 from "./screens/Item1";
import SELL1 from "./screens/SELL1";
import Menu from "./components/Menu";

export const auth_pages = [
    {name: "StartingPage1", component: StartingPage1, options: {headerShown: false }}, 
    {name: "StartingPage2", component: StartingPage2, options: {headerShown: false }}, 
    {name: "Welcome", component: Welcome, options: {headerShown: false }}, 
    {name: "Login", component: Login, options: {headerShown: false }}, 
    {name: "CreateAccount", component: CreateAccount, options: {headerShown: false }}, 
    {name: "Pin", component: Pin, options: {headerShown: false }}, 
]

export const buyer_pages = [
    {name: "HOME", component: HOME, options: {headerShown: false }}, 
    {name: "CATEGORIES", component: CATEGORIES, options: {headerShown: false }}, 
    {name: "CATEGORIES2", component: CATEGORIES2, options: {headerShown: false }}, 
    {name: "CATEGORIES1", component: CATEGORIES1, options: {headerShown: false }}, 
    {name: "PROFILE", component: PROFILE, options: {headerShown: false }}, 
    {name: "CART", component: CART, options: {headerShown: false }}, 

]
export const seller_pages = [
    {name: "HOMES", component: HOMES, options: {headerShown: false }}, 
    {name: "SelluploadItems", component: SelluploadItems, options: {headerShown: false }}, 
    {name: "SELL", component: SELL, options: {headerShown: false }}, 
    {name: "MYITEMS", component: MYITEMS, options: {headerShown: false }}, 
    {name: "PROFILES", component: PROFILES, options: {headerShown: false }}, 
    {name: "SELL1", component: SELL1, options: {headerShown: false }}, 

]
export const all_page_links = [
    ...auth_pages, ...buyer_pages, ...seller_pages,
    {name: "Loading", component: Loading, options: {headerShown: false }}, 
    {name: "LoadingS", component: LoadingS, options: {headerShown: false }}, 
    {name: "Item2", component: Item2, options: {headerShown: false }}, 
    {name: "Item11", component: Item11, options: {headerShown: false }}, 
    {name: "About", component: About, options: {headerShown: false }}, 
    {name: "Menu1", component: Menu1, options: {headerShown: false }}, 
    {name: "Search", component: Search, options: {headerShown: false }},
    {name: "Item", component: Item, options: {headerShown: false }}, 
    {name: "Item1", component: Item1, options: {headerShown: false }}, 
    {name: "Menu", component: Menu, options: {headerShown: false }}
]

export const page_links = (userType) => {
    let links = [...auth_pages]; 
    if (userType === 'seller') {
        links = [...links, ...seller_pages]; 
    } else {
        links = [...links, ...buyer_pages]; 
    }
    return links;
};

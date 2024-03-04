//auth Page
import StartingPage from "./screens/auth/StartingPage";
import Welcome from "./screens/auth/Welcome";
import Login from "./screens/auth/Login";
import CreateAccount from "./screens/auth/CreateAccount";
import Pin from "./screens/auth/Pin";
import SessionTimeOut from "./screens/auth/SessionTimeOut";

//loading pages
import Loading from "./screens/buyer/Loading";
import LoadingS from "./screens/seller/LoadingS";

//buyer pages
import BuyerHome from "./screens/buyer/HOME";
import CATEGORIES from "./screens/buyer/CATEGORIES";
import CATEGORIES1 from "./screens/buyer/CATEGORIES1";
import CART from "./screens/buyer/CART";
import CATEGORIES2 from "./screens/buyer/CATEGORIES2";
import PROFILE from "./screens/buyer/PROFILE";

//seller pages
import HOMES from "./screens/seller/HOMES";
import MYITEMS from "./screens/seller/MYITEMS";
import PROFILES from "./screens/seller/PROFILES";
import SelluploadItems from "./screens/seller/SelluploadItems";
import SELL from "./screens/seller/SELL";
import SELL1 from "./screens/seller/SELL1";

//item pages
import Item from "./screens/item/Item";
import Item1 from "./screens/item/Item1";
import Item2 from "./screens/item/Item2";
import Item11 from "./screens/item/Item11";

//more pages
import About from "./components/auth/About";
import Search from "./screens/Search";
import Menu from "./components/Menu";
import Menu1 from "./components/pages/Menu1";

export const auth_pages = [
    {name: "StartingPage", component: StartingPage, options: {headerShown: false }}, 
    {name: "Welcome", component: Welcome, options: {headerShown: false }}, 
    {name: "Login", component: Login, options: {headerShown: false }}, 
    {name: "CreateAccount", component: CreateAccount, options: {headerShown: false }}, 
    {name: "Pin", component: Pin, options: {headerShown: false }}, 
    {name: "SessionTimeOut", component: SessionTimeOut, options: {headerShown: false }}, 
]

export const footerPages = {
    buyer:[
        {footerName:'HOME', name: "BuyerHome", component: BuyerHome, options: {headerShown: false }}, 
        {footerName:'CATEGORIES', name: "Categories", component: CATEGORIES, options: {headerShown: false }}, 
        {footerName:'CART', name: "Cart", component: CART, options: {headerShown: false }}, 
        {footerName:'PROFILE', name: "BuyerProfile", component: PROFILE, options: {headerShown: false }}, 
    ],
    seller:[
        {footerName:'HOME', name: "SellerHome", component: HOMES, options: {headerShown: false }}, 
        {footerName:'SELL', name: "SELL", component: SELL, options: {headerShown: false }}, 
        {footerName:'MY ITEMS', name: "MYITEMS", component: MYITEMS, options: {headerShown: false }}, 
        {footerName:'PROFILE', name: "SellerProfile", component: PROFILE, options: {headerShown: false }}, 
    ]
}
export const buyer_pages = [
    ...footerPages.buyer,
    {name: "CATEGORIES2", component: CATEGORIES2, options: {headerShown: false }}, 
    {name: "CATEGORIES1", component: CATEGORIES1, options: {headerShown: false }}, 
]
export const seller_pages = [
    ...footerPages.seller,
    {name: "SelluploadItems", component: SelluploadItems, options: {headerShown: false }}, 
    {name: "SELL1", component: SELL1, options: {headerShown: false }}, 

]
export const other_pages = [
    {name: "Loading", component: Loading, options: {headerShown: false }}, 
    {name: "LoadingS", component: LoadingS, options: {headerShown: false }}, 
    {name: "Search", component: Search, options: {headerShown: false }},
]
export const all_page_links = [
    ...auth_pages, ...buyer_pages, ...seller_pages, ...other_pages,
    {name: "Item2", component: Item2, options: {headerShown: false }}, 
    {name: "Item11", component: Item11, options: {headerShown: false }}, 
    {name: "About", component: About, options: {headerShown: false }}, 
    {name: "Menu1", component: Menu1, options: {headerShown: false }}, 
    {name: "Item", component: Item, options: {headerShown: false }}, 
    {name: "Item1", component: Item1, options: {headerShown: false }}, 
    {name: "Menu", component: Menu, options: {headerShown: false }}
]

export const page_links = (userType) => {
    let links = [...auth_pages, ...other_pages]; 
    if (userType === 'seller') {
        links = [...links, ...seller_pages]; 
    } else {
        links = [...links, ...buyer_pages]; 
    }
    return links;
};

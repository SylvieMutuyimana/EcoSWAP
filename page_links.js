//auth Page
import StartingPage from "./screens/auth/StartingPage";
import Welcome from "./screens/auth/Welcome";
import Login from "./screens/auth/Login";
import CreateAccount from "./screens/auth/CreateAccount";
import Pin from "./screens/auth/Pin";

//loading pages
import BuyerLoading from "./screens/buyer/BuyerLoading";
import SellerLoading from "./screens/seller/SellerLoading";

//buyer pages
import BuyerHome from "./screens/buyer/HOME";
import CATEGORIES from "./screens/buyer/CATEGORIES";
import CATEGORIES1 from "./screens/buyer/CATEGORIES1";
import CART from "./screens/buyer/CART";
import CATEGORIES2 from "./screens/buyer/CATEGORIES2";
import BuyerProfile from "./screens/buyer/PROFILE";

//seller pages
import SellerHome from "./screens/seller/HOME";
import MYITEMS from "./screens/seller/MYITEMS";
import SellerProfile from "./screens/seller/PROFILE";
import SelluploadItems from "./screens/seller/SelluploadItems";
import SELL from "./screens/seller/SELL";

//item pages
import Item from "./screens/item/Item";
import Item1 from "./screens/item/Item1";
import Item2 from "./screens/item/Item2";
import Item11 from "./screens/item/Item11";

//more pages
import About from "./components/auth/About";
import Search from "./screens/Search";
import BuyerMenu from "./components/nav/BuyerMenu";
import SellerMenu from "./components/nav/SellerMenu";

const similar_menu = [
    {name:'TERMS/POLICIES', link: null},
    {name:'LOGOUT', link: null},
    {name:'HELP', link: null},
]

export const menuPages = {
    buyer:[
        {name:'HOME', link: 'BuyerHome'},
        {name:'WISHLIST', link: 'Cart'},
        {name:'ACCOUNT', link: 'BuyerProfile'},
        {name:'NEW ITEMS', link: 'Categories'},
        ...similar_menu
    ],
    seller:[
        {name:'HOME', link: 'SellerHome'},
        {name:'ACCOUNT', link: 'BuyerProfile'},
        {name:'MY ITEMS', link: 'MyItems'},
        ...similar_menu
    ]
}

export const startingPages = [
    {name: "StartingPage", component: StartingPage, options: {headerShown: false }}, 
]

export const auth_pages = [
    {name: "Welcome", component: Welcome, options: {headerShown: false }}, 
    {name: "Login", component: Login, options: {headerShown: false }}, 
    {name: "CreateAccount", component: CreateAccount, options: {headerShown: false }}, 
    {name: "Pin", component: Pin, options: {headerShown: false }}, 
]

export const footerPages = {
    buyer:[
        {footerName:'HOME', name: "BuyerHome", component: BuyerHome, options: {headerShown: false }}, 
        {footerName:'CATEGORIES', name: "Categories", component: CATEGORIES, options: {headerShown: false }}, 
        {footerName:'CART', name: "Cart", component: CART, options: {headerShown: false }}, 
        {footerName:'PROFILE', name: "BuyerProfile", component: BuyerProfile, options: {headerShown: false }}, 
    ],
    seller:[
        {footerName:'HOME', name: "SellerHome", component: SellerHome, options: {headerShown: false }}, 
        {footerName:'SELL', name: "Sell", component: SELL, options: {headerShown: false }}, 
        {footerName:'MY ITEMS', name: "MyItems", component: MYITEMS, options: {headerShown: false }}, 
        {footerName:'PROFILE', name: "SellerProfile", component: SellerProfile, options: {headerShown: false }}, 
    ]
}
export const buyer_pages = [
    {name: "BuyerLoading", component: BuyerLoading, options: {headerShown: false }}, 
    ...footerPages.buyer,
    {name: "CATEGORIES2", component: CATEGORIES2, options: {headerShown: false }}, 
    {name: "CATEGORIES1", component: CATEGORIES1, options: {headerShown: false }}, 
]
export const seller_pages = [
    {name: "SellerLoading", component: SellerLoading, options: {headerShown: false }}, 
    ...footerPages.seller,
    {name: "SelluploadItems", component: SelluploadItems, options: {headerShown: false }}, 

]
export const other_pages = [
    {name: "Search", component: Search, options: {headerShown: false }},
    {name: "Item2", component: Item2, options: {headerShown: false }}, 
    {name: "Item11", component: Item11, options: {headerShown: false }}, 
    {name: "About", component: About, options: {headerShown: false }}, 
    {name: "BuyerMenu", component: BuyerMenu, options: {headerShown: false }}, 
    {name: "SellerMenu", component: SellerMenu, options: {headerShown: false }}, 
    {name: "Item", component: Item, options: {headerShown: false }}, 
    {name: "Item1", component: Item1, options: {headerShown: false }}, 
]

export const all_page_links = [
    ...auth_pages, ...buyer_pages, ...seller_pages, ...other_pages,
]

export const page_links = (user_type) => {
    let links = [...other_pages, ...auth_pages]; 
    console.log('user_type on page_links: ', user_type)
    if (user_type === 'seller') {
        links = [ ...seller_pages, ...links]; 
    } else if (user_type === 'buyer'){
        links = [ ...buyer_pages, ...links]; 
    }
    return links;
};
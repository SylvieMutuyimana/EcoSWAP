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
import CART from "./screens/buyer/CART";
import BuyerProfile from "./screens/buyer/PROFILE";

//seller pages
import SellerHome from "./screens/seller/HOME";
import MYITEMS from "./screens/seller/MYITEMS";
import SellerProfile from "./screens/seller/PROFILE";
import SelluploadItems from "./screens/seller/sell/SelluploadItems";
import SELL from "./screens/seller/SELL";

//item pages
import SellerItem from "./screens/item/seller/SellerItem";

//more pages
import About from "./components/auth/About";
import Search from "./screens/Search";
import BuyerMenu from "./components/nav/BuyerMenu";
import SellerMenu from "./components/nav/SellerMenu";
import BuyerItem from "./screens/item/buyer/BuyerItem";
import CheckOutBuyer from "./screens/buyer/cart/CheckOutBuyer";
import ItemsDisplayPage from "./screens/item/ItemsDisplayPage";
import AcceptBidPage from "./screens/seller/acceptBid/AcceptBidPage";
import SoldItem from "./screens/item/seller/Soldtem";
import MyOrdersPage from "./screens/buyer/orders/MyOrdersPage";

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
]
export const seller_pages = [
    {name: "SellerLoading", component: SellerLoading, options: {headerShown: false }}, 
    ...footerPages.seller,
    {name: "SelluploadItems", component: SelluploadItems, options: {headerShown: false }}, 

]

export const item_pages = [
    {name: "SellerItem", component: SellerItem, options: {headerShown: false }}, 
    {name: "BuyerItem", component: BuyerItem, options: {headerShown: false }}, 
    {name: "CheckOutBuyer", component: CheckOutBuyer, options: {headerShown: false }}, 
    {name: "AcceptBidPage", component: AcceptBidPage, options: {headerShown: false }}, 
    {name: "SoldItem", component: SoldItem, options: {headerShown: false }}, 
    {name: "MyOrders", component: MyOrdersPage, options: {headerShown: false }}, 
    {name: "ItemsDisplayPage", component: ItemsDisplayPage, options: {headerShown: false }}, 
]

export const other_pages = [
    {name: "Search", component: Search, options: {headerShown: false }},
    {name: "About", component: About, options: {headerShown: false }}, 
    {name: "BuyerMenu", component: BuyerMenu, options: {headerShown: false }}, 
    {name: "SellerMenu", component: SellerMenu, options: {headerShown: false }}, 
]

export const all_page_links = [
    ...auth_pages, ...buyer_pages, ...seller_pages, ...other_pages, ...item_pages,
]

export const page_links = (user_type) => {
    let links = [...other_pages, ...auth_pages, ...item_pages]; 
    console.log('user_type on page_links: ', user_type)
    if (user_type === 'seller') {
        links = [ ...seller_pages, ...links]; 
    } else if (user_type === 'buyer'){
        links = [ ...buyer_pages, ...links]; 
    }
    return links;
};
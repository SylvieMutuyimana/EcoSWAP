import { itemsWishSampleData, usersSampleData } from "./users"; 
import { sampleCategories_, sampleItems } from "./data";

export const organisationData = {
    name: 'EcoSWAP',
    email:'contact@eco-swap.com',
    social: {
        Instagram:{username:'eco-swap', link:'www.instagram.com/eco-swap'},
        Facebook:{username:'eco-swap', link:'www.facebook.com/eco-swap'},
        Whatsapp:{username:'0786405038', link:'www.whatsapp.com/0786405038'}
    }
}

export const startComponents__ = {
    all_items: sampleItems.all, sold_items: sampleItems.sold, unsold_items: sampleItems.unsold,
    new_items: sampleItems.new , categories: sampleCategories_, 
    users: { admins: usersSampleData.admins, buyers: usersSampleData.buyers,sellers: usersSampleData.sellers, all: usersSampleData.all},
    wishlist: itemsWishSampleData.wishlist, cart: itemsWishSampleData.cart, purchases: itemsWishSampleData.purchases, 
    organisation : organisationData
};


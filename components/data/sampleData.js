import { sampleCategories_, sampleItems } from "./dummydata/data";

const theItems_ = sampleItems.all

export const getItems = (type)=>{
    console.log('type: ', type)
    return theItems_
}

export const allItems_Sample_ = sampleItems.all
 
export const newItems_Sample_ = sampleItems.new
 
export const soldItems_Sample_ = sampleItems.sold
 
export const unsoldItems_Sample_ = sampleItems.unsold
 
export const sampleCategories = sampleCategories_

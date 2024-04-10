import React from "react";
import SalesoldItems from "./saIe_soldtems";

const SaleItemsContainer = ({theItems, page_name, number_items}) => {
  console.log('items on sod; ', theItems)
  return (
    <SalesoldItems theItems={theItems} number_items={number_items} page_name={page_name} type={'sale'}/>
  );
}

export default SaleItemsContainer;

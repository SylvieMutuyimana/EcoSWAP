//buyer
import catunChosen from "../../assets/images/nav/buyer/black_cat.png";
import cartunChosen from "../../assets/images/nav/buyer/black_cart.png";
import catChosen from "../../assets/images/nav/buyer/white_cat.png";
import cartChosen from "../../assets/images/nav/buyer/white_cart.png";
//seller
import uploadunChosen from "../../assets/images/nav/seller/black_upload.png";
import myItemsunChosen from "../../assets/images/nav/seller/black_items.png";
import uploadChosen from "../../assets/images/nav/seller/white_upload.png";
import myItemsChosen from "../../assets/images/nav/seller/white_items.png";
//shared
import homeunChosen from "../../assets/images/nav/shared/black_home.png";
import profileunChosen from "../../assets/images/nav/shared/black_profile.png";
import homeChosen from "../../assets/images/nav/shared/white_home.png";
import profileChosen from "../../assets/images/nav/shared/white_profile.png";
export const theIcons = {
    "HOME": { unchosen: homeunChosen, chosen: homeChosen },
    "CATEGORIES": { unchosen: catunChosen, chosen: catChosen },
    "CART": { unchosen: cartunChosen, chosen: cartChosen },
    "PROFILE": { unchosen: profileunChosen, chosen: profileChosen},
    "SELL": { unchosen: uploadunChosen, chosen: uploadChosen },
    "MY ITEMS": { unchosen: myItemsunChosen, chosen: myItemsChosen },
};

import { randomDate } from "./randomdate";

//categories
const categories_ = [
  {name:'Home Applicances', displayName: 'Home Applicances'},
  {name:'Tablets && Accessories', displayName: 'Tablets && Accessories'},
  {name:'Phones && Accessories', displayName: 'Phones && Accessories'},
  {name:'TVs', displayName: 'TVs'},
  {name:'PCs', displayName: 'PCs'},
  {name:'Laptops', displayName: 'Laptops'},
]
export const theCategories_ =()=>{
  const the_categories = [];
  categories_.map((category, index)=>{
      const category_ = category;
      category_['_id'] = 'Cat' + index + 'TN';
      category_['doneOn'] = randomDate()
      the_categories.push(category_);
  })
  console.log('the_categories: ', the_categories)

  return the_categories
}

export const sampleCategories_ = theCategories_()

//items
const items_s = [
  {
    name: "Cracked Nokia Phone",
    description: "A Nokia phone with a cracked screen, unable to start.",
    image: require("../../../assets/images/samples/cracked_phone.png"),
    price: 25000,
    status: "In stock",
    seller: "John Doe",
    category: "Phones && Accessories",
    _id : 'LS908f5677'
  },
  {
    name: "Cracked Phone Screen",
    description: "A phone with a cracked screen, unable to start.",
    image: require("../../../assets/images/samples/cracked_screen.png"),
    price: 20000,
    status: "Sold",
    seller: "Jane Smith",
    category: "Phones && Accessories",
    _id : 'LS908f5577'
  },
  {
    name: "Home Items",
    description: "Assorted home items for sale.",
    image: require("../../../assets/images/samples/home_items.png"),
    price: 35000,
    status: "In stock",
    seller: "David Brown",
    category: "Home Applicances",
    _id : 'LS908fet77'
  },
  {
    name: "Nokia Phone",
    description: "A Nokia phone model for sale.",
    image: require("../../../assets/images/samples/nokia.png"),
    price: 30000,
    status: "In stock",
    seller: "Michael Wilson",
    category: "Phones && Accessories",
    _id : 'LS908igh5'

  },
  {
    name: "Spoilt Blender",
    description: "A blender that is not functioning properly.",
    image: require("../../../assets/images/samples/spoilt_blender.png"),
    price: 15000,
    status: "Sold",
    seller: "Sophia Martinez",
    category: "Home Applicances",
    _id : 'LS908f66gj'

  },
  {
    name: "5 old TVs",
    description: "Various television sets for sale.",
    image: require("../../../assets/images/samples/tvs.png"),
    price: 40000,
    status: "In stock",
    seller: "Christopher Lee",
    category: "TVs",
    _id : 'LS90ttttyu'
  }
];

const recent_items= (theItems) => {
  const split_item = (item) => {
      const dateString = item.added_date;
      if (dateString) {
          const [day, month, year] = dateString.split('/');
          return new Date(`${year}-${month}-${day}`);
      }
      return null;
  };
  
  const sortedItems = theItems.sort((a, b) => {
      const dateA = split_item(a);
      const dateB = split_item(b);
      return dateB - dateA; 
  });
  return sortedItems;
};

export const theItems_ = () => {
  const the_items = { all: [], new: [], sold: [], unsold: [] };
  
  items_s.forEach((item) => {
    for (let count = 0; count < 3; count++) {
      const item_ = { ...item }; // Create a copy of the original item
      
      item_._id = item_._id + (count + 12);
      item_.price = item.price + count * 120;
      if(count%2===0){
        const bids = []
        const n_bids = count * 2
        for (let n__ = 0; n__ < n_bids; n__++) {
          let a_bid = {}
          a_bid['price'] = item.price + n__ * 120;
          a_bid['username'] = 'user' + count+ n_bids + n__;
          bids.push(a_bid)
        }
        item_['bids'] = bids
      }
      item_.description = item.description + count;
      item_.added_date = randomDate();
      item_.doneOn = randomDate();
      item_.location = 'Kigali, Gasabo, Remera, Rukiri 2';
      item_.locationDescription = 'Ruyenzi building ku gisimenti. the third floor, room 203.';
      if (count % 2 === 0) {
        item_.status = 'In stock';
        the_items.unsold.push(item_);
      } else {
        item_.status = 'Sold';
        item_.sold_date = randomDate();
        item_.buyer = item.buyer + count;
        the_items.sold.push(item_);
      }
      
      the_items.all.push(item_);
    }
  });

  the_items.new = recent_items(the_items.all);
  console.log('the_items:', the_items);
  return the_items;
};


export const sampleItems = theItems_()
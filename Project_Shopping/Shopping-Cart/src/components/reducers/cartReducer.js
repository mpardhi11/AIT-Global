import Item1 from "../../images/item1.png";
import Item2 from "../../images/item2.png";
import Item3 from "../../images/item3.png";
import Item4 from "../../images/item4.png";
import Item5 from "../../images/item5.png";
import Item6 from "../../images/item6.png";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Anti-virus",
      desc: "Kaspersky Internet Security.",
      price: 400,
      img: Item1,
    },
    {
      id: 2,
      title: "Windows 10",
      desc: "Windows 10 Key",
      price: 5000,
      img: Item2,
    },
    {
      id: 3,
      title: "AutoDesk Autocad",
      desc:
        "AutoCAD: 2D and 3D CAD software with design automation and industry-specific toolsets, plus web and mobile apps.",
      price: 6500,
      img: Item3,
    },
    {
      id: 4,
      title: "Adobe Photoshop",
      desc:
        "Create beautiful graphics, photos and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.",
      price: 1500,
      img: Item4,
    },
    {
      id: 5,
      title: "WebStorm",
      desc:
        "WebStorm is an integrated development environment for JavaScript and related technologies.",
      price: 1000,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc: "Something Something Shoe.",
      price: 1900,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;

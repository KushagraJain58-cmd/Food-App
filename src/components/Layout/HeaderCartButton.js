import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);  //the HeaderCartNutton Component will be re-evaluated whenever the context changes
                                           // and it will be change by usign CartProvider component

  // const numberOfCartItems = cartCtx.items.length;  I don't want to add every item as a new entry in that list
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {    //I want to add one item in the cart but set the amount for items
    return currNumber + item.amount;  //reduce is a built in method which allows us to transform the array of data into a single value
  }, 0);    //currNumber will be different for every item it is calling

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlighted?classes.bump : ''}`;

  useEffect(() => { 
    if (items.length === 0)
      return;
    console.log("Bump");
    setBtnIsHighlighted(true);

    const timer=setTimeout(() => {
      console.log("Timeout");
      setBtnIsHighlighted(false);
    }, 300);

    return () => { 
      console.log("Cleanup");
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span> 
    </button>
  );
};

export default HeaderCartButton;

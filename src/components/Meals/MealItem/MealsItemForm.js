//This component is for entering amount of item added in thr cart
import classes from "./MealsItemForm.module.css";
import Input from "../../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault(); //to make sure that browser default of reloading the page is prevented

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //to convert string entered amount ot number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
      }
      props.onAddToCart(enteredAmountNumber);
    };
    
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
          <button>+ Add</button>
          {!amountIsValid && <p>Please enter valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;

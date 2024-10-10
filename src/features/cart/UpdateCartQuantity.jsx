import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decPizzaQty, getCurrentQuantityById, incPizzaQty } from "./cartSlice";

function UpdateCartQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQty = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decPizzaQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button type="round" onClick={() => dispatch(incPizzaQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;

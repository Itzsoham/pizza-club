import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatcxh = useDispatch();
  return (
    <Button type="small" onClick={() => dispatcxh(delItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

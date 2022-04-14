import ItemsInSale from "./ItemInSale";
import { restoreHealth } from "../../../../redux/slices/heroSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Shop.css";
import Gold from "./Gold";

function Shop() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const text = [
    ["Shop", "Tienda"],
    ["Your Gold: ", "Tu Oro: "],
    ["Restores all your Health", "Recupera toda tu vida"],
  ];
  return (
    <div id="shop">
      <p>{text[0][lang.lang]}</p>
      <Gold />

      <ItemsInSale
        item={text[2][lang.lang]}
        price={5}
        onbuy={() => dispatch(restoreHealth())}
      />
    </div>
  );
}

export default Shop;

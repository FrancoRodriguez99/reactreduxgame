import { useDispatch, useSelector } from "react-redux";
import { removeGold } from "../../../../../redux/slices/heroSlice";
import "./ItemInSale.css";

function ItemInSale({ item = "nothing", price = 0, onbuy = () => {} }) {
  const dispatch = useDispatch();
  function buy() {
    onbuy();
    dispatch(removeGold(price));
  }
  const hero = useSelector((state) => state.hero);
  return (
    <div>
      <li className="ItemInSale">
        {price > hero.gold ? (
          <button disabled className="btndisabled">
            <p>
              {item} for {price} gold
            </p>
            <div>
              <p className="hoverme">
                Not Enough Gold, you got {hero.gold} $ it requires {price} $
              </p>
            </div>
          </button>
        ) : (
          <button onClick={() => buy()}>
            <p>
              {item} for {price} gold
            </p>
          </button>
        )}
      </li>
    </div>
  );
}

export default ItemInSale;

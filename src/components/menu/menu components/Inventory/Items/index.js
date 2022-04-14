import { useSelector, useDispatch } from "react-redux";
import { equipHero, sell } from "../../../../../redux/slices/heroSlice";
import "./Items.css";

function Items() {
  const hero = useSelector((store) => store.hero);
  const lang = useSelector((store) => store.lang);
  const dispatch = useDispatch();

  const text = ["Sell", "Vender"];

  return (
    <ul id="items">
      {hero.loot.map((x, i) => (
        <li key={x[0] + i} className="oneitem">
          <div className="someitem">
            <button
              className="items"
              onClick={() => dispatch(equipHero([x[1], x[3], i]))}
            >
              <p>{x[0][lang.lang]}</p>
              <div className="onHover">
                <p>{x[2][lang.lang]}</p>
              </div>
            </button>
          </div>
          <button
            onClick={() => dispatch(sell([i, x[4]]))}
            className="item-sale"
          >
            <p>
              {text[lang.lang]} ({x[4]}$)
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Items;

import { useSelector, useDispatch } from "react-redux";
import { unequipHero } from "../../../../../redux/slices/heroSlice";
import "./EquippedItems.css";

function EquippedItems() {
  const hero = useSelector((store) => store.hero);
  const lang = useSelector((store) => store.lang);
  const dispatch = useDispatch();

  return (
    <ul id="EquippedItems">
      {hero.equipedloot.map((x, i) => (
        <li key={x[0] + i} className="Equiped-items">
          <div>
            <button
              className="equip-item"
              onClick={() => dispatch(unequipHero(i))}
            >
              <p>{x[0][lang.lang]}</p>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EquippedItems;

import { useSelector, useDispatch } from "react-redux";
import { lvlup } from "../../../../redux/slices/heroSlice";
import "./Stats.css";
function Stats() {
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const text = [
    ["Hero Max Life: ", "Maxima Vida del héroe: "],
    ["Hero Damage: ", "Daño del héroe: "],
    ["Hero % of Critical: ", "Porcentaje de Crítico del héroe: "],
    ["Hero lvl: ", "héroe lvl: "],
    ["Hero xp: ", "héroe xp: "],
  ];
  return (
    <div className="stats">
      <div className="somestat">
        <p>
          {" "}
          {text[0][lang.lang]} {hero.hp}
        </p>
        {hero.dlvl > 0 ? (
          <button onClick={() => dispatch(lvlup("hp"))}>+</button>
        ) : null}
      </div>
      <div className="somestat">
        <p>
          {text[1][lang.lang]} {hero.dmg}{" "}
        </p>
        {hero.dlvl > 0 ? (
          <button onClick={() => dispatch(lvlup("dmg"))}>+</button>
        ) : null}
      </div>
      <div className="somestat">
        <p>
          {text[2][lang.lang]} {hero.crit} %{" "}
        </p>
        {hero.dlvl > 0 && hero.crit < 99 ? (
          <button onClick={() => dispatch(lvlup("crit"))}>+</button>
        ) : null}
      </div>
      <div>
        <p>
          {text[3][lang.lang]} {hero.lvl}
        </p>
      </div>
      <div>
        <p>
          {text[4][lang.lang]} {hero.xp}/100
        </p>
      </div>
    </div>
  );
}

export default Stats;

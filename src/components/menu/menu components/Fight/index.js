import "./fight.css";
import { useDispatch, useSelector } from "react-redux";
import {
  generateEnemy,
  changeEnemyDif,
} from "../../../../redux/slices/enemySlice";
import { fightHero } from "../../../../redux/slices/heroSlice";

function Fight() {
  const enemy = useSelector((state) => state.enemy);
  const dispatch = useDispatch();
  function Click() {
    dispatch(generateEnemy());
    dispatch(fightHero());
  }
  const lang = useSelector((state) => state.lang);
  const text = [
    ["Fight", "Luchar"],
    [
      "Select a Place to Fight First!",
      "Primero selecciona un lugar donde pelear",
    ],
    [
      "Mad Forest (Moderate Difficulty)",
      "Bosque Maldito (Dificultad Moderada)",
    ],
    ["Old Ruins (Hard Difficulty)", "Ruinas Antiguas (Alta dificultad)"],
  ];
  return (
    <div id="Fight-Menu">
      {enemy.id === 0 || enemy.id === 1 ? (
        <button className="fight" onClick={() => Click()}>
          <p>{text[0][lang.lang]}</p>
        </button>
      ) : (
        <button className="fight" disabled>
          <p>{text[0][lang.lang]}</p>
          <p className="advert"> {text[1][lang.lang]}</p>
        </button>
      )}

      <button onClick={() => dispatch(changeEnemyDif(0))} className="DificSel">
        <p>{text[2][lang.lang]}</p>
      </button>
      <button onClick={() => dispatch(changeEnemyDif(1))} className="DificSel">
        <p>{text[2][lang.lang]}</p>
      </button>
    </div>
  );
}

export default Fight;

import { useSelector } from "react-redux";
import "./EnemyStats.css";

function Stats() {
  const enemy = useSelector((state) => state.enemy);
  const lang = useSelector((state) => state.lang);
  const text = [
    ["Enemy Max Life: ", "Máxima vida del Enemigo: "],
    ["Enemy Damage: ", "Daño del Enemigo: "],
    ["Enemy % of Critical: ", "Porcentaje de crítico del Enemigo "],
  ];
  return (
    <div className="stats">
      <div>
        <p>
          {text[0][lang.lang]} {enemy.hp}{" "}
        </p>
      </div>
      <div>
        <p>
          {text[1][lang.lang]} {enemy.dmg}{" "}
        </p>
      </div>
      <div>
        <p>
          {text[2][lang.lang]} {enemy.crit} %{" "}
        </p>
      </div>
    </div>
  );
}

export default Stats;

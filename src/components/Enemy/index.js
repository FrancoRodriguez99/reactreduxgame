import "./enemys.css";
import { useSelector } from "react-redux";

function Enemy({ hp = 0 }) {
  const enemy = useSelector((state) => state.enemy);
  let myStyle = {};
  hp > 0
    ? (myStyle = { width: Math.floor((hp * 100) / enemy.hp) + "%" })
    : (myStyle = { width: 0 + "%" });
  return (
    <div>
      <div id="enemy">
        <div id="data">
          <div id="Name">
            <p>{enemy.name[0]}</p>
          </div>
          <div id="hp">
            <div id="chpe" style={myStyle}>
              <p></p>
              {hp}
            </div>
          </div>
        </div>
        <div id="Enemy-Body" className={enemy.classes[0]}>
          <div id="Enemy-Head" className={enemy.classes[1]}></div>
          <div id="Enemy-jewelry" className={enemy.classes[1][1]}></div>
          <div id="Enemy-Chest" className={enemy.classes[2][0]}>
            <div className={enemy.classes[2][1]}></div>
            <div className={enemy.classes[2][2]}></div>
          </div>
          <div id="Enemy-Legs" className={enemy.classes[3][0]}></div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;

import "./hero-items.css";
import { useSelector } from "react-redux";

function Hero({ hp = 0 }) {
  const hero = useSelector((state) => state.hero);
  let myStyle = {};
  hp > 0
    ? (myStyle = { width: Math.floor((hp * 100) / hero.hp) + "%" })
    : (myStyle = { width: 0 + "%" });
  return (
    <div>
      <div id="Hero" className={hero.fighting ? "Hero-Fight" : "none"}>
        <div id="data">
          <div id="Name">
            <p>{hero.name}</p>
          </div>
          <div id="hp">
            <div id="chph" style={myStyle}>
              <p>{hp}</p>
            </div>
          </div>
        </div>
        <div id="Hero-Body">
          <div id="Hero-Head" className={hero.classes[0]}></div>
          <div id="Hero-Jewelry" className={hero.classes[1]}></div>
          <div id="Hero-Chest" className={hero.classes[2]}>
            <div id="Hero-Weapon" className={hero.classes[3]}></div>
          </div>
          <div id="Hero-Legs" className={hero.classes[4]}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

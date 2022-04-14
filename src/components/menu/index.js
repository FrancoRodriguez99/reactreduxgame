import "./menu.css";
import Fight from "./menu components/Fight";
import Inventory from "./menu components/Inventory";
import Shop from "./menu components/Shop";
import { useSelector } from "react-redux";
import Stats from "./menu components/Stats";
import EnemyStats from "./menu components/EnemyStats";
import LangOptions from "./menu components/LangOptions";

function Menu() {
  const hero = useSelector((state) => state.hero);
  return (
    <div>
      {hero.fighting ? (
        <div id="fight-menu">
          <Stats />
          <EnemyStats />
          <LangOptions />
        </div>
      ) : (
        <div id="menu">
          <Inventory />
          <Stats />
          <Shop />
          <Fight />
          <LangOptions />
        </div>
      )}
    </div>
  );
}

export default Menu;

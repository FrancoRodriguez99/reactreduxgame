import { useSelector } from "react-redux";
import EquippedItems from "./EquippedItems";
import "./inventory.css";
import Items from "./Items";

function Inventory() {
  const lang = useSelector((store) => store.lang);
  const text = [
    ["Items", "Equipacion"],
    ["Equiped", "Equipado"],
  ];
  return (
    <div id="inventory">
      <p>{text[0][lang.lang]}</p>
      <Items />
      <p> {text[1][lang.lang]}</p>
      <EquippedItems />
    </div>
  );
}

export default Inventory;

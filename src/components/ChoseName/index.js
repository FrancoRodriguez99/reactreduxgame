import "./ChoseName.css";
import { getlang } from "../../redux/slices/langSlice";
import { changeName } from "../../redux/slices/heroSlice";
import { useDispatch } from "react-redux";

function ChoseName() {
  const dispatch = useDispatch();
  let randon = "";
  function start(lange) {
    dispatch(getlang(lange));
    dispatch(changeName(randon));
  }
  return (
    <div id="chosename">
      <input
        className="textinput"
        type="text"
        onChange={(event) => (randon = event.target.value)}
        placeholder="Name / Nombre"
      ></input>
      <div id="languages">
        <button onClick={() => start(0)}>Press me to start in English</button>
        <button onClick={() => start(1)}>
          ¡Presioname para comenzar en Español!
        </button>
      </div>
    </div>
  );
}

export default ChoseName;

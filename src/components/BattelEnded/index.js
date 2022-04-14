import { useDispatch, useSelector } from "react-redux";
import { fightHero, takeLoot, lvlup } from "../../redux/slices/heroSlice";
import { restStatus } from "../../redux/slices/battelSlice";
import "./BattelEnded.css";

function BattelEnded() {
  const dispatch = useDispatch();
  const battel = useSelector((state) => state.battel);
  const lang = useSelector((state) => state.lang);
  const text = [
    [
      "Fight Over, Click Here to Continue",
      "Pelea terminada, click aqui para continuar",
    ],
    ["You Lose, Try Againg?", "Perdiste, volver a intentar?"],
  ];
  function Click() {
    dispatch(lvlup(battel.battelLog[0][0]));
    dispatch(takeLoot(Object.values(battel.loot)));
    dispatch(fightHero());
    dispatch(restStatus());
  }
  return (
    <div>
      {battel.winner === "Hero" ? (
        <button onClick={() => Click()} className="ButtonFightOver">
          {text[0][lang.lang]}
        </button>
      ) : (
        <button
          onClick={() => window.location.reload(false)}
          className="ButtonFightOver"
        >
          {text[0][lang.lang]}
        </button>
      )}
    </div>
  );
}

export default BattelEnded;

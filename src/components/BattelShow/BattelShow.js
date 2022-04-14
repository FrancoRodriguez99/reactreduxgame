import "./BattelShow.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeFrame } from "../../redux/slices/battelSlice";
import { takeDamage } from "../../redux/slices/heroSlice";
import Hero from "../Hero";
import Enemy from "../Enemy";
import BattelEnded from "../BattelEnded";
import { useFightMechanism } from "../../hooks/useFightMechanism";

function BattelShow() {
  const battel = useSelector((state) => state.battel);
  const enemy = useSelector((state) => state.enemy);
  useFightMechanism();
  const dispatch = useDispatch();
  useEffect(() => {
    if (battel.frame >= battel.battelLog[0].length - 1) {
      dispatch(takeDamage(battel.battelLog[2][battel.frame]));
    } else {
      const time = setTimeout(() => {
        dispatch(changeFrame(battel.battelLog[0].length - 1));
      }, 3000);
      return () => clearTimeout(time);
    }
  });

  let herolife = battel.battelLog[2][battel.frame];
  let enemylife = battel.battelLog[0][battel.frame];

  return (
    <div id="BattelShow" className={`bg${enemy.id}`}>
      <Hero hp={herolife} />
      {battel.frame >= battel.battelLog[0].length - 1 ? (
        <div className="ContinueButton">
          <BattelEnded />
        </div>
      ) : null}{" "}
      <Enemy hp={enemylife} />
    </div>
  );
}

export default BattelShow;

import { useSelector, useDispatch } from "react-redux";
import { uploadBattel } from "../redux/slices/battelSlice";

export function useFightMechanism() {
  const enemy = useSelector((state) => state.enemy);
  const hero = useSelector((state) => state.hero);
  const battel = useSelector((state) => state.battel);
  const dispatch = useDispatch();

  if (battel.exists === false) {
    let critornot = 1;
    let enemyhp = enemy.hp;
    let herohp = hero.chp;
    let battelLog = [[], [], [], []];

    if (hero.fighting === true) {
      battelLog = letsfight();
      dispatch(
        uploadBattel({
          battelLog: battelLog,
          winner: herohp > 0 ? "Hero" : "Enemy",
          loot: enemy.loot,
        })
      );
    }

    function letsfight() {
      if (herohp > 0 && enemyhp > 0) {
        let crit = Math.floor(Math.random() * 101);
        crit > hero.crit ? (critornot = 1) : (critornot = 2);
        critornot === 2 ? battelLog[1].push(true) : battelLog[1].push(false);
        battelLog[0].push(enemyhp);
        enemyhp = enemyhp - hero.dmg * critornot;
      }
      if (enemyhp > 0 && herohp > 0) {
        let crit = Math.floor(Math.random() * 101);
        crit > enemy.crit ? (critornot = 1) : (critornot = 2);
        critornot === 2 ? battelLog[3].push(true) : battelLog[3].push(false);
        battelLog[2].push(herohp);
        herohp = herohp - enemy.dmg * critornot;
      }

      if (enemyhp > 0 && herohp > 0) {
        return letsfight();
      } else if (enemyhp > 0) {
        battelLog[0].push(enemyhp);
        battelLog[2].push(herohp);
        return battelLog;
      } else {
        battelLog[2].push(herohp);
        battelLog[2].push(herohp);
        battelLog[0].push(enemyhp);
        return battelLog;
      }
    }
  }
}

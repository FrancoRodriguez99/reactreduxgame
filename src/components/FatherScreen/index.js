import Hero from "../Hero";
import Menu from "../menu";
import "./FatherScreen.css";
import BattelShow from "../BattelShow/BattelShow";
import { useSelector } from "react-redux";
import Footer from "../Footer";
import ChoseName from "../ChoseName";

function FatherScreen() {
  const hero = useSelector((state) => state.hero);
  return (
    <div id="FatherScreen">
      {hero.name === "l4#2q" ? (
        <ChoseName />
      ) : (
        <div>
          <Menu />
          {hero.fighting ? (
            <BattelShow />
          ) : (
            <div id="Hero-Box">
              <Hero hp={hero.chp} />
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default FatherScreen;

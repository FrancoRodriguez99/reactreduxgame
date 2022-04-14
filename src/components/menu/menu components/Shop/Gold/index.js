import { useSelector } from "react-redux";

function Gold() {
  const hero = useSelector((store) => store.hero);
  const lang = useSelector((store) => store.lang);
  const text = ["Your Gold: ", "Tu Oro: "];

  return (
    <p>
      {text[lang.lang]} {hero.gold}
    </p>
  );
}

export default Gold;

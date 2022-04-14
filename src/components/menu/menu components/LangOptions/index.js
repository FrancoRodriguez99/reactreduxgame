import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../../../redux/slices/langSlice";
import "./LangOptions.css";

function LangOptions() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  return (
    <div id="langchanger">
      {lang.lang === 0 ? (
        <div>
          <button
            onClick={() => dispatch(changeLang())}
            id="btnlangeng"
            className="btnchan"
          >
            Es/En
          </button>
          <div className="backgroundpls">Cambiar Idioma/Change Language</div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => dispatch(changeLang())}
            id="btnlangspn"
            className="btnchan"
          >
            Es/En
          </button>
          <div className="backgroundpls">Cambiar Idioma/Change Language</div>
        </div>
      )}
    </div>
  );
}

export default LangOptions;

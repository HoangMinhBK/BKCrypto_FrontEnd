import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "./redux/themeSlice";
export default function ButtonChangeTheme() {
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  const dp = useDispatch();
  console.log(themeMode);

  return (
    <button
      onClick={() => {
        dp(toggleThemeMode());
      }}
    >
      Change theme
    </button>
  );
}

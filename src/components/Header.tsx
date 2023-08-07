import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useTheme } from "../hooks/useTheme";

export const Header = () => {
  const { themes } = useTheme();

  console.log(themes);
  

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="p-4">
      <select
        data-choose-theme
        className="select select-bordered w-full max-w-xs"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

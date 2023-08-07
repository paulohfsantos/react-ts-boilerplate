import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useAuth } from "../hooks/useAuth";

export const Header = () => {
  const { logout } = useAuth();

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
  ];

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="w-full px-4 py-2 flex items-center justify-between">
      <div className="logo">
        <h5 className="font-bold">Home</h5>
      </div>
      <div className="flex">
        <select
          data-choose-theme
          className="select select-bordered w-full max-w-xs select-sm"
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
        <button className="btn btn-sm" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

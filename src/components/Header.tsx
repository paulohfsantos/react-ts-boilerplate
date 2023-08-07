import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { useAuth } from "../hooks/useAuth";
import { getUserData } from "../common/HandleToken";

export const Header: React.FC = () => {
  const { logout } = useAuth();
  const userMail = getUserData();

  const username: string = userMail.email;
  const newName = username
    .split("@")[0]
    .charAt(0)
    .toUpperCase()

  + username
    .split("@")[0]
    .slice(1)
    .toLowerCase();

  const firstLetter = newName.charAt(0);
  

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
    // false parameter is required for react project
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="flex-none">
        <div className="px-3">
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
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-circle avatar">
            <div className="w-4 rounded-full flex justify-center items-center">
              {firstLetter}
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="cursor-default mb-3">
              <span className="p-3">{newName}</span>
            </li>
            <li>
              <button className="btn btn-sm" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

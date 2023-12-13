import React from "react";
import { capitalizeWord } from "../utils/func";
import { FaPlus } from "react-icons/fa6";
import { RightBarContext } from "../contexts/RightBarContext";

const TopNav = ({ path }) => {
  const [activeMenu, setActiveMenu] = React.useState(
    `Semua ${capitalizeWord(path.split("-")[0])}`
  );
  const menus = [
    `Semua ${capitalizeWord(path.split("-")[0])}`,
    "Terbaru",
    "Bidang",
    "Filter",
  ];

  const { toggleNav } = React.useContext(RightBarContext);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="top-menus flex w-1/2 text-center">
          {menus.map((item, index) => (
            <div
              key={index}
              className={`w-1/4 pb-1 transition cursor-pointer ${
                activeMenu === item ? "border-b-4 border-gray-500" : ""
              }`}
              onClick={() => setActiveMenu(item)}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        {path !== "jadwal-test" ? (
          <button
            className="px-10 py-2 text-white font-semibold bg-gray-500 rounded-md flex items-center gap-2"
            onClick={() => toggleNav(`open_${path}`, path)}
          >
            <FaPlus />
            {capitalizeWord(path.split("-")[0])} Baru
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TopNav;

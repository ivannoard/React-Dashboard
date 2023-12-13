import { NavLink } from "react-router-dom";
import { Logo } from "../assets";
import { menus } from "../utils/models";

const Sidebar = () => {
  return (
    <>
      <div className="fixed w-1/6 flex flex-col justify-between h-full">
        <div className="top">
          <div className="logo h-[80px] w-full bg-white">
            <img src={Logo} alt="" className="h-full block" />
          </div>
          <div className="p-4 flex flex-col gap-3">
            {menus.map((menu) => (
              <NavLink
                className="bg-white p-3 rounded-lg hover:bg-gray-300 transition menu"
                key={menu.id}
                to={menu.path}
              >
                {menu.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="bottom p-4 flex gap-2 items-center">
          <div className="bg-gray-500 w-[45px] h-[45px] rounded-full"></div>
          <div className="profile">
            <h4 className="font-semibold text-sm">Munchaminna</h4>
            <p className="text-gray-400 text-sm">Superadmin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import { dummyDashboard } from "../utils/models";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { RightBarContext } from "../contexts/RightBarContext";
import { capitalizeWord } from "../utils/func";
import { IoMdClose } from "react-icons/io";
import RightBar from "../components/RightBar";

const Lowongan = () => {
  const { type, isOpen } = React.useContext(RightBarContext);
  return (
    <>
      {type === "lowongan" && isOpen && <RightBar />}
      <div className="grid grid-cols-12 gap-2 items-center">
        {dummyDashboard.map((item, index) => (
          <div className="col-span-3" key={index}>
            <div className="card bg-white rounded-md p-4">
              <div className="image-wrapper bg-gray-300 rounded-xl w-full h-[200px] animate-pulse">
                {/* <img src="" alt="" /> */}
              </div>
              <div className="card-content mt-3">
                <div className="title w-1/2 h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
                <div className="description w-3/4 h-[30px] bg-gray-300 rounded-md mt-2 animate-pulse"></div>
                <div className="card-action flex items-center justify-between mt-8">
                  <div className="w-1/2">
                    <div className="w-full bg-gray-300 h-[30px] animate-pulse"></div>
                  </div>
                  <div className="w-1/2 flex gap-2 justify-end">
                    <button className="bg-gray-500 p-2 rounded-md">
                      <MdModeEditOutline size={20} className="text-white" />
                    </button>
                    <button className="bg-gray-500 p-2 rounded-md">
                      <MdDelete size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lowongan;

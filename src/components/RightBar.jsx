import React from "react";
import { capitalizeWord } from "../utils/func";
import { IoMdClose } from "react-icons/io";
import { RightBarContext } from "../contexts/RightBarContext";
const RightBar = () => {
  const { type, toggleNav } = React.useContext(RightBarContext);
  return (
    <>
      <div className="w-1/3 h-full fixed bg-gray-50 top-0 right-0 z-[11] p-4 transition">
        <div className="header flex items-center justify-between border-b-4 border-gray-200 pb-2">
          <h4>
            Input{" "}
            {capitalizeWord(
              type === "pelamar-cabang" ? "pelamar Cabang" : type
            )}{" "}
            Baru
          </h4>
          <IoMdClose
            size={28}
            className="cursor-pointer"
            onClick={() => toggleNav(`close_${type}`, type)}
          />
        </div>
        {type === "lowongan" && (
          <form className="flex h-[670px] flex-col justify-between mt-3">
            <div className="top flex flex-col gap-3">
              <div className="form-group">
                <label htmlFor="judul_lowongan">Judul Lowongan</label>
                <input
                  type="text"
                  name="judul_lowongan"
                  id="judul_lowongan"
                  className="w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="deskripsi">Deskripsi</label>
                <textarea
                  type="text"
                  name="deskripsi"
                  id="deskripsi"
                  className="w-full border px-2 py-2 rounded-md"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="pendidikan">Pendidikan</label>
                <input
                  type="text"
                  name="pendidikan"
                  id="pendidikan"
                  className="w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="posisi">Posisi</label>
                <select
                  name="posisi"
                  id="posisi"
                  className="w-full border px-2 py-2 rounded-md"
                >
                  <option selected value="">
                    Pilih Posisi
                  </option>
                </select>
              </div>
              <div className="form-group flex justify-between mt-2">
                <div className="left w-1/2">
                  <h5>Upload Foto</h5>
                  <p className="text-gray-300">JPG, PNG, Max 3 Mb</p>
                </div>
                <div className="right w-1/2">
                  <input type="file" />
                </div>
              </div>
            </div>
            <button className="w-full py-2 rounded-md bg-gray-500 text-white font-semibold mb-4">
              Input ke sistem
            </button>
          </form>
        )}
        {type !== "lowongan" && (
          <form className="flex h-[670px] flex-col justify-between mt-3">
            <div className="top flex flex-col gap-3">
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="no_hp">Nomor HP</label>
                <input
                  type="text"
                  name="no_hp"
                  id="no_hp"
                  className="w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pendidikan">Pendidikan</label>
                <select
                  name="pendidikan"
                  id="pendidikan"
                  className="w-full border px-2 py-2 rounded-md"
                >
                  <option selected value="">
                    Pilih Pendidikan
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="alamat">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="form-group flex justify-between mt-2">
                <div className="left w-1/2">
                  <h5>Upload Foto</h5>
                  <p className="text-gray-300">JPG, PNG, Max 3 Mb</p>
                </div>
                <div className="right w-1/2">
                  <input type="file" />
                </div>
              </div>
            </div>
            <button className="w-full py-2 rounded-md bg-gray-500 text-white font-semibold mb-4">
              Input ke sistem
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default RightBar;

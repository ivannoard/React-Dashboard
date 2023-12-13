import React from "react";
import { dummyDashboard } from "../utils/models";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { RightBarContext } from "../contexts/RightBarContext";

const JadwalTest = () => {
  const { type, isOpen } = React.useContext(RightBarContext);
  console.log(type);
  console.log(isOpen);
  return (
    <>
      <table className="border table-auto w-full mt-4">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Nomor Hp</th>
            <th>Lokasi</th>
            <th>Pendidikan Terakhir</th>
            <th>Posisi</th>
            <th>Kantor Cabang</th>
            <th>Jadwal Seleksi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {dummyDashboard.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Munchaminna</td>
              <td>munchmunchaww@gmail.com</td>
              <td>085123456789</td>
              <td>Jakarta</td>
              <td>S-1</td>
              <td>UI/UX</td>
              <td>Semarang</td>
              <td>20 Agustus 2023</td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button className="bg-gray-500 p-2 rounded-md">
                    <MdModeEditOutline size={20} className="text-white" />
                  </button>
                  <button className="bg-gray-500 p-2 rounded-md">
                    <MdDelete size={20} className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default JadwalTest;

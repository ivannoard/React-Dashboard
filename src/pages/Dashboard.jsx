import React from "react";
import { dummyDashboard } from "../utils/models";
import { RightBarContext } from "../contexts/RightBarContext";
const Dashboard = () => {
  const { type, isOpen } = React.useContext(RightBarContext);
  console.log(type);
  console.log(isOpen);
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 bg-gray-300 rounded-md p-3">
          <h4>Total Pendaftar</h4>
          <h2 className="mt-2">14.030 Orang</h2>
          <div className="flex mt-2">
            <div className="w-1/3">
              <h5 className="dashboard">Lolos Test</h5>
              <h4>10.320</h4>
            </div>
            <div className="w-1/3">
              <h5 className="dashboard">Lolos Interview</h5>
              <h4>564</h4>
            </div>
            <div className="w-1/3">
              <h5 className="dashboard">On-boarding</h5>
              <h4>120</h4>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-300 rounded-md p-3">
          <h4>Lowongan Kerja Terbuka</h4>
          <div className="flex flex-wrap mt-2">
            <div className="w-1/2">
              <h5 className="dashboard">Frontend Developer</h5>
              <h4>632</h4>
            </div>
            <div className="w-1/2">
              <h5 className="dashboard">Product Manager</h5>
              <h4>121</h4>
            </div>
            <div className="w-1/2">
              <h5 className="dashboard">Backend Developer</h5>
              <h4>212</h4>
            </div>
            <div className="w-1/2">
              <h5 className="dashboard">IT Support</h5>
              <h4>214</h4>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-300 rounded-md p-3">
          <h4>Jadwal Seleksi</h4>
          <h3>12 Juni 2023</h3>
          <h4 className="mt-2">Jadwal Interview</h4>
          <h3>24 Juni 2023</h3>
        </div>
      </div>
      <table className="border table-auto w-full mt-4">
        <thead className="text-center">
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Nomor Hp</th>
          <th>Lokasi</th>
          <th>Pendidikan Terakhir</th>
          <th>SKill</th>
          <th>Posisi</th>
          <th>Linkedin</th>
          <th>Kategori</th>
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
              <td>UI/UX</td>
              <td>Munchaminna</td>
              <td>Potensial</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;

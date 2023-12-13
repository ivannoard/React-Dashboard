import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthLayout, HomeLayout } from "../layouts";
import {
  Dashboard,
  JadwalTest,
  Login,
  Lowongan,
  NotFound,
  Pelamar,
  PelamarCabang,
} from "../pages";
function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence mode="await" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jadwal-test" element={<JadwalTest />} />
          <Route path="lowongan" element={<Lowongan />} />
          <Route path="pelamar" element={<Pelamar />} />
          <Route path="pelamar-cabang" element={<PelamarCabang />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;

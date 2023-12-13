import { Outlet } from "react-router-dom";
import { AnimatePage, Sidebar, TopNav } from "../components";
import { useLocation } from "react-router-dom";
function HomeLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <main>
        <div className="flex min-h-screen">
          <div className="w-1/6">
            <Sidebar />
          </div>
          <div className="bg-[#f3f3f3] flex-1 w-5/6 relative">
            <div className="search bg-white w-full sticky left-0 top-0 z-10">
              <div className="w-full p-4 ">
                <input
                  type="text"
                  className="bg-white border w-1/4 p-1 px-5 rounded-full"
                  placeholder="Search. . ."
                />
              </div>
            </div>
            <div className="min-h-screen p-4">
              <div className="my-5">
                {pathname !== "/" && <TopNav path={pathname.split("/")[1]} />}
              </div>
              <AnimatePage>
                <Outlet />
              </AnimatePage>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeLayout;

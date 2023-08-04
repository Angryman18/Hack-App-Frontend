import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className='h-16'>
        <Header />
      </div>
      <Outlet />
    </>
  );
}

export default Layout;

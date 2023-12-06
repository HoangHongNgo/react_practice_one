import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Suspense } from "react";

interface LayoutProps {
  handleLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ handleLogout }) => {
  return (
    <>
      <Header handleLogout={handleLogout} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

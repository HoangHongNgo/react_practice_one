import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Suspense } from "react";

export interface ILayoutProps {}

const Layout = (props: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

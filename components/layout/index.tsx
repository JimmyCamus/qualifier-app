import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;

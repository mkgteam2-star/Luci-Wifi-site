import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingElements from "./FloatingElements";
import FloatingCallButton from "./FloatingCallButton";
import CallNowPopup from "./CallNowPopup";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <FloatingElements />
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
      {isHome && <CallNowPopup />}
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import ScrollToTop from "@/components/feature/ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background-50">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
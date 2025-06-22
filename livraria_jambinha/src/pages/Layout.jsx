import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[url('assets/background.jpeg')] bg-cover p-8">
      <Sidebar className="rounded" />
      
      <div className="rounded-r-2xl flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen p-7 overflow-hidden bg-[url('assets/background.jpeg')] h-screen w-screen bg-cover bg-center">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

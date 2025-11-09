import Main_Navbar from "../components-webapp/Main-Navbar";
import Sidebar from "../components-webapp/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white">
      <aside className="w-[17%]">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-[10%] ">
          <Main_Navbar />
        </header>
        <main className="flex-1 overflow-y-auto  p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

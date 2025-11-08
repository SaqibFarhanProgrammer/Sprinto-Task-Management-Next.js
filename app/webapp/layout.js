import Main_Navbar from "./components-webapp/Main-Navbar";
import Sidebar from "./components-webapp/Sidebar";

export default function webapplayout({ children }) {
  return (
    <div className="main h-screen w-full">
      ,
      {children}
      <Sidebar/>
    </div>
  );
}

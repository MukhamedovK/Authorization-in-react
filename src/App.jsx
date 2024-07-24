import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default App;

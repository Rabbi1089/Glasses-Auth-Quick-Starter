import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <div className="2xl:container mx-auto">
      <NavBar />
  
      <Outlet />
      <Footer />
    </div>
  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Items from "./components/Items";







export default function Home() {
  return (
   <>
   <div>
    <Sign/>
    <Navbar/>
    <Hero/>
    <Brands/>
    <Items/>
   </div>
   </>
  );
}

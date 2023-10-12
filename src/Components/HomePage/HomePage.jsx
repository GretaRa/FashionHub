import Navbar from "../Navbar/Navbar"
import NavigationBar from "../Navbar/NavigationBar";
import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";


function HomePage(){
  return(
    <>
      <NavigationBar/>
      <HeroSection/>
      <ProductCategories/>
    </>
  );
}

export default HomePage;
import Footer from "../Footer";
import NavigationBar from "../Navbar/NavigationBar";
import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";


function HomePage(){
  return(
    <>
      <NavigationBar/>
      <HeroSection/>
      <ProductCategories/>
      <Footer/>
    </>
  );
}

export default HomePage;
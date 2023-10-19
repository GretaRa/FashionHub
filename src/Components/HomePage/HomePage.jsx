import Footer from "../Footer";
import NavigationBar from "../Navbar/NavigationBar";
import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";


function HomePage(){
  return(
    <>
    <NavigationBar/>
    <div className="min-h-screen flex flex-col">
      <HeroSection/>
      <ProductCategories/>
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;
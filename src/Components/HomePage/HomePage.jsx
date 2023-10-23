import Footer from "../Footer";
import NavigationBar from "../Navbar/NavigationBar";
import HeroSection from "./HeroSection";
import HomeCategories from "./HomeCategories";


function HomePage(){
  return(
    <>
    <NavigationBar/>
    <div className="min-h-screen flex flex-col">
      <HeroSection/>
      <HomeCategories/>
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;
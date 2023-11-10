import HeroSection from "./HeroSection";
import HomeCategories from "./HomeCategories";

function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <HomeCategories />
      </div>
    </>
  );
}

export default HomePage;

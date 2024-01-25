import HeroSection from "./HeroSection";
import HomeCategories from "./HomeCategories";

function HomePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <HeroSection />
        <HomeCategories />
      </main>
    </>
  );
}

export default HomePage;

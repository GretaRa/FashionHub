
const HeroSection = () => {
  return (
    <section className="hero flex items-center">
      <div className="hero-content flex-1 text-center">
        <h1 className="text-3xl text-gray-800 mb-4">Shop the Latest Trends</h1>
        <p className="text-gray-600 text-lg">Discover our handpicked collection of stylish products.</p>
        <a href="#shop" className="btn bg-orange-500 text-white py-2 px-4 rounded-full font-semibold mt-4 inline-block">
          Shop Now
        </a>
      </div>
      <div className="hero-image flex-1 text-center">
        <img src="path/to/your-hero-image.jpg" alt="Fashion Product" className="max-w-full" />
      </div>
    </section>
  );
};

export default HeroSection;

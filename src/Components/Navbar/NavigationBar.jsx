
const NavigationBar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">Your Logo</a>
        <div className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-gray-800">Shop</a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

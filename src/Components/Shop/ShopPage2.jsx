import NavigationBar from '../Navbar/NavigationBar';
import Footer from '../Footer';

const ShopPage = () => {
  // Sample product data for practice
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'path/to/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 24.99,
      image: 'path/to/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.99,
      image: 'path/to/product3.jpg',
    },
    // Add more products as needed
  ];

  return (
    <>
      <NavigationBar/>
      <div className="container mx-auto py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-lg font-semibold text-gray-800 mt-2">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 mt-2 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopPage;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../API/Api";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageurl, setImageurl] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const ImageUrl = "https://fakestoreapi.com/products/1";
    fetchData(ImageUrl)
      .then((data) => setImageurl(data.image))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="flex justify-evenly items-center mt-28">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 mb-4">
            Shop the Latest Trends
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our handpicked collection of stylish products.
          </p>
          <Link
            to="/shop"
            className="btn bg-orange-500 text-white py-2 px-4 rounded-full font-semibold mt-4 inline-block"
          >
            Shop Now
          </Link>
        </div>
        <div>
          {loading === false ? (
            <img src={imageurl} alt="Fashion Product" className="max-w-xs" />
          ) : (
            <div className="flex justify-center items-center h-96">
              <div className="ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;

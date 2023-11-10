
const fetchItems = (category) => {
  const apiUrl = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      throw error; // Re-throw the error for the calling component to handle
    });
};

export default fetchItems;
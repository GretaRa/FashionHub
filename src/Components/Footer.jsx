
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; 2023 Your Shop Name</p>
        <p>Contact: <a href="mailto:youremail@example.com" className="text-blue-400 hover:underline">youremail@example.com</a></p>
        <p>Find us on <a href="https://github.com/yourgithubusername" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </footer>
  );
};

export default Footer;

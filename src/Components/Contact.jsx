import NavigationBar from "./Navbar/NavigationBar";
import Footer from "./Footer";

const ContactUsPage = () => {
  return (
    <>
      <NavigationBar/>
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-4">Feel free to reach out with any questions or feedback.</p>
        <p className="text-blue-500 hover:underline">
          Email: <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <p className="text-blue-500 hover:underline">
          GitHub: <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">
            github.com/yourgithubusername
          </a>
        </p>
      </div>
      <Footer/>
    </>
    
  );
};

export default ContactUsPage;

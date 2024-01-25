const ContactUsPage = () => {
  return (
    <>
      <main className="container mx-auto py-8 text-center min-h-screen flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-4 mx-2">
          Feel free to reach out with any questions or feedback.
        </p>
        <p className="text-blue-500 hover:underline">
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/greta-rakauskaite/">
            linkedin.com/greta-rakauskaite/
          </a>
        </p>
        <p className="text-blue-500 hover:underline">
          GitHub:{" "}
          <a
            href="https://github.com/GretaRa"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/GretaRa
          </a>
        </p>
      </main>
    </>
  );
};

export default ContactUsPage;

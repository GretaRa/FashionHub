import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; 2023 FashionHub</p>
        <p className="flex items-center justify-center gap-2">
          Designed and coded by Greta Rakauskaite{" "}
          <a
            href="https://github.com/GretaRa"
            className="text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

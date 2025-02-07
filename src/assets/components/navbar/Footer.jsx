import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact us:</h3>
            <ul>
              <li className="mb-2">
                <span className="font-medium text-white">Nitika</span>: +91-7506582740
              </li>
              <li className="mb-2">
                <span className="font-medium text-white">Amogh</span>: +91-9326479441
              </li>
              <li className="mb-2">
                <span className="font-medium text-white">Harsh</span>: +91-9119455072
              </li>
              <li>
                <span className="font-medium text-white">Samruddhi</span>: +91-9321758452
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-4">Stay connected</h3>
            <div className="flex space-x-4">
              <Link
                to="https://www.linkedin.com/in/amogh-more-2a1066298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-400 hover:text-white text-2xl transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/in/nitika-nagdevani-985230259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-400 hover:text-white text-2xl transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>
              <Link
                to="https://www.linkedin.com/in/samruddhi-jatkar-200a242a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-400 hover:text-white text-2xl transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Company Details Section */}
          <div className="text-sm text-gray-500 mt-6 md:mt-0">
            <p>Vivekanand Education Society's Institute of Technology</p>
          
            <p>
            Hashu Advani Memorial Complex, Collector's Colony
            Chembur, Mumbai, Maharashtra 400074,a northeastern suburb of Mumbai, and stretches over a few acres of land
            </p>
            <p>
            VESIT B.Tech ranking by NIRF is 251 out of 300 colleges in India in 2021.
            VESIT Overall ranking by National Institutional Ranking Framework Innovation is 26 out of 50 colleges in India in 2020.
            </p>
            <p>
            The Vivekanand Education Society (VES) is a Mumbai-based non-profit educational society founded in 1962 that operates 26 educational institutions (tertiary and secondary) located in the area surrounding Chembur, a suburb situated in central Mumbai, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
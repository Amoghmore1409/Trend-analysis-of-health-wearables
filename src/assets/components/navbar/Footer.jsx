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
                to="/instagram"
                className="text-gray-400 hover:text-white text-2xl transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/whatsapp"
                className="text-gray-400 hover:text-white text-2xl transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>
              <Link
                to="/linkedin"
                className="text-gray-400 hover:text-white text-2xl transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Company Details Section */}
          <div className="text-sm text-gray-500 mt-6 md:mt-0">
            <p>WGSN Limited, Company number 04585491.</p>
            <p>WGSN, 79 York Street, London, W1H 1DP</p>
            <p>
              WGSN LLC ID 04-3851246, Registered office 251 Little Falls Drive,
              Wilmington, Delaware 19808, United States
            </p>
            <p>
              WGSN Ltda, CNPJ (Taxpayer’s Register): 15.536.968/0001-04, Address:
              Rua Tabapuã, 841, Conjunto 15, 1º Andar, São Paulo, Brazil
            </p>
            <p>
              CTIC WGSN China Limited (CTIC WGSN 中国有限公司), Registered address:
              Room 502, 5/F, Building 4, No. 300, Dingyuan Road, Songjiang
              District, Shanghai, China
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
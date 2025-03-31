
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nexus-800 text-white">
      <div className="nexus-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nexus Cura</h3>
            <p className="text-gray-300 mb-4">
              Uw partner in holistische zorgbemiddeling. Wij verbinden zorgprofessionals en 
              zorgorganisaties voor een betere toekomst in de zorg.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-gray-300 hover:text-white transition duration-300">Over Ons</Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-white transition duration-300">Diensten</Link>
              </li>
              <li>
                <Link to="/vacatures" className="text-gray-300 hover:text-white transition duration-300">Vacatures</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Voor Wie */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Voor Wie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-white transition duration-300">Zorgprofessionals</Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-white transition duration-300">Zorgorganisaties</Link>
              </li>
              <li>
                <Link to="/vacatures" className="text-gray-300 hover:text-white transition duration-300">Vacatures Bekijken</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Offerte Aanvragen</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-care-400" />
                <span>+31 (0)20 123 4567</span>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-care-400" />
                <span>info@nexuscura.nl</span>
              </p>
              <p className="flex items-center">
                <MapPin size={18} className="mr-2 text-care-400" />
                <span>Hoofdstraat 123, 1234 AB Amsterdam</span>
              </p>
              <p className="flex items-center">
                <Clock size={18} className="mr-2 text-care-400" />
                <span>Ma-Vr: 9:00 - 17:00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexus Cura. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

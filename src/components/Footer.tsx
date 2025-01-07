import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Pierrick Pizza
            </h3>
            <p className="text-gray-600">
              Les meilleures pizzas artisanales de Bourgneuf en Retz
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Horaires</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mar-Dim: 11h30-14h, 18h-22h</span>
              </div>
              <div className="text-gray-600">Lundi: Fermé</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:+33240000000"
                className="flex items-center text-gray-600 hover:text-pizza-500 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>02 40 00 00 00</span>
              </a>
              <a
                href="mailto:contact@pierrickpizza.fr"
                className="flex items-center text-gray-600 hover:text-pizza-500 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@pierrickpizza.fr</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Adresse</h4>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-gray-600 hover:text-pizza-500 transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2 mt-1" />
              <span>
                1 Rue de la Pizza
                <br />
                44580 Bourgneuf en Retz
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Pierrick Pizza. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="/mentions-legales"
                className="text-gray-500 hover:text-pizza-500 transition-colors"
              >
                Mentions légales
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://victorraguin.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pizza-500 transition-colors"
              >
                Site créé par Victor Raguin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
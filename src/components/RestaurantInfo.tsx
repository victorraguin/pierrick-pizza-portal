import { MapPin, Phone, Clock, Truck } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const RestaurantInfo = () => {
  return (
    <div className="mb-12 space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Alert className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300">
          <MapPin className="h-5 w-5 text-orange-500" />
          <AlertDescription className="text-gray-800">
            <strong className="text-orange-600 block mb-1">Adresse</strong>
            4 RUE DES JAUNINS<br />
            BOURGNEUF EN RETZ<br />
            <span className="text-gray-600">(Zone des Jaunins, face au garage Renault)</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300">
          <Clock className="h-5 w-5 text-orange-500" />
          <AlertDescription className="text-gray-800">
            <strong className="text-orange-600 block mb-1">Horaires du magasin</strong>
            Mardi au Dimanche : à partir de 18H<br />
            Jeudi et Vendredi : 12H-14H<br />
            <span className="text-gray-600">Fermé le Lundi</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300">
          <Phone className="h-5 w-5 text-orange-500" />
          <AlertDescription className="text-gray-800">
            <strong className="text-orange-600 block mb-1">Contact</strong>
            Restaurant : 02 40 82 10 68<br />
            Mobile : 06 81 40 40 29
          </AlertDescription>
        </Alert>

        <Alert className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300">
          <Truck className="h-5 w-5 text-orange-500" />
          <AlertDescription className="text-gray-800">
            <strong className="text-orange-600 block mb-1">Le camion (18h-22h)</strong>
            Mardi : St Hilaire de Chaléons<br />
            Mercredi : Fresnay-en-Retz<br />
            Vendredi : Arthon-en-Retz<br />
            Dimanche : Chéméré
          </AlertDescription>
        </Alert>
      </div>

      <Alert className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300">
        <AlertDescription className="text-gray-800 text-center">
          Distributeur de boissons et de pizzas disponible sur le parking<br />
          Nous nous déplaçons également sur des concerts et des manifestations (nombre de personnes minimum à respecter)
        </AlertDescription>
      </Alert>
    </div>
  );
};

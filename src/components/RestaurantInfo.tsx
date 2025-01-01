import { MapPin, Phone, Clock, Truck } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const RestaurantInfo = () => {
  return (
    <div className="mb-12 space-y-6 animate-fadeIn">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold text-pizza-100 mb-4">
          Pierrick Pizza
        </h1>
        <p className="text-xl text-pizza-300">
          Les meilleures pizzas artisanales près de Cheméré
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Alert className="bg-pizza-900/30 border-pizza-800/30">
          <MapPin className="h-5 w-5 text-pizza-300" />
          <AlertDescription className="text-pizza-200">
            <strong className="text-pizza-100 block mb-1">Adresse</strong>
            4 RUE DES JAUNINS<br />
            BOURGNEUF EN RETZ<br />
            <span className="text-sm">(Zone des Jaunins, face au garage Renault)</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-pizza-900/30 border-pizza-800/30">
          <Clock className="h-5 w-5 text-pizza-300" />
          <AlertDescription className="text-pizza-200">
            <strong className="text-pizza-100 block mb-1">Horaires du magasin</strong>
            Mardi au Dimanche : à partir de 18H<br />
            Jeudi et Vendredi : 12H-14H<br />
            <span className="text-pizza-500">Fermé le Lundi</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-pizza-900/30 border-pizza-800/30">
          <Phone className="h-5 w-5 text-pizza-300" />
          <AlertDescription className="text-pizza-200">
            <strong className="text-pizza-100 block mb-1">Contact</strong>
            Restaurant : 02 40 82 10 68<br />
            Mobile : 06 81 40 40 29
          </AlertDescription>
        </Alert>

        <Alert className="bg-pizza-900/30 border-pizza-800/30">
          <Truck className="h-5 w-5 text-pizza-300" />
          <AlertDescription className="text-pizza-200">
            <strong className="text-pizza-100 block mb-1">Le camion (18h-22h)</strong>
            Mardi : St Hilaire de Chaléons<br />
            Mercredi : Fresnay-en-Retz<br />
            Vendredi : Arthon-en-Retz<br />
            Dimanche : Chéméré
          </AlertDescription>
        </Alert>
      </div>

      <Alert className="bg-pizza-900/30 border-pizza-800/30">
        <AlertDescription className="text-pizza-200 text-center">
          Distributeur de boissons et de pizzas disponible sur le parking<br />
          Nous nous déplaçons également sur des concerts et des manifestations (nombre de personnes minimum à respecter)
        </AlertDescription>
      </Alert>
    </div>
  );
};
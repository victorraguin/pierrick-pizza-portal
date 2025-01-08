import { MapPin, Phone, Clock, Truck, Pizza, ChefHat, CookingPot } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const RestaurantInfo = () => {
  return (
    <div className="mb-12 space-y-6 animate-fadeIn">
      <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-red-600/95 to-red-800/90 opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 px-4">
            <div className="flex justify-center mb-4">
              <Pizza className="w-16 h-16 text-white animate-spin-slow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Pierrick Pizza
            </h1>
            <p className="text-xl text-orange-100 drop-shadow-lg flex items-center justify-center gap-2">
              <ChefHat className="w-6 h-6" />
              L'authentique saveur italienne près de chez vous
              <CookingPot className="w-6 h-6" />
            </p>
          </div>
        </div>
      </div>

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
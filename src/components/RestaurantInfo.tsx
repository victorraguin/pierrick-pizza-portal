import { MapPin, Phone, Clock, Truck } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const RestaurantInfo = () => {
  return (
    <div className="mb-12 space-y-6 animate-fadeIn">
      <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8 relative">
        <div className="absolute inset-0 w-full h-full" style={{ transform: 'translateZ(-1px) scale(2)', zIndex: -1 }}>
          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80"
            alt="Pizza artisanale italienne"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-pizza-800 to-transparent opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Pierrick Pizza
            </h1>
            <p className="text-xl text-pizza-100 drop-shadow-lg">
              L'authentique saveur italienne près de chez vous
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Alert className="bg-gradient-to-br from-pizza-800/90 via-pizza-800/95 to-black/90 border-pizza-800/30 backdrop-blur-sm hover:bg-pizza-800/50 transition-colors duration-300">
          <MapPin className="h-5 w-5 text-orange-400" />
          <AlertDescription className="text-gray-200">
            <strong className="text-orange-300 block mb-1">Adresse</strong>
            4 RUE DES JAUNINS<br />
            BOURGNEUF EN RETZ<br />
            <span className="text-sm text-gray-400">(Zone des Jaunins, face au garage Renault)</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-gradient-to-br from-stone-900/90 via-stone-800/95 to-black/90 border-stone-800/30 backdrop-blur-sm hover:bg-stone-800/50 transition-colors duration-300">
          <Clock className="h-5 w-5 text-orange-400" />
          <AlertDescription className="text-gray-200">
            <strong className="text-orange-300 block mb-1">Horaires du magasin</strong>
            Mardi au Dimanche : à partir de 18H<br />
            Jeudi et Vendredi : 12H-14H<br />
            <span className="text-gray-400">Fermé le Lundi</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-gradient-to-br from-pizza-800/90 via-pizza-800/95 to-black/90 border-pizza-800/30 backdrop-blur-sm hover:bg-pizza-800/50 transition-colors duration-300">
          <Phone className="h-5 w-5 text-orange-400" />
          <AlertDescription className="text-gray-200">
            <strong className="text-orange-300 block mb-1">Contact</strong>
            Restaurant : 02 40 82 10 68<br />
            Mobile : 06 81 40 40 29
          </AlertDescription>
        </Alert>

        <Alert className="bg-gradient-to-br from-stone-900/90 via-stone-800/95 to-black/90 border-stone-800/30 backdrop-blur-sm hover:bg-stone-800/50 transition-colors duration-300">
          <Truck className="h-5 w-5 text-orange-400" />
          <AlertDescription className="text-gray-200">
            <strong className="text-orange-300 block mb-1">Le camion (18h-22h)</strong>
            Mardi : St Hilaire de Chaléons<br />
            Mercredi : Fresnay-en-Retz<br />
            Vendredi : Arthon-en-Retz<br />
            Dimanche : Chéméré
          </AlertDescription>
        </Alert>
      </div>

      <Alert className="bg-gradient-to-br from-pizza-800/90 via-pizza-800/95 to-black/90 border-pizza-800/30 backdrop-blur-sm hover:bg-pizza-800/50 transition-colors duration-300">
        <AlertDescription className="text-gray-200 text-center">
          Distributeur de boissons et de pizzas disponible sur le parking<br />
          Nous nous déplaçons également sur des concerts et des manifestations (nombre de personnes minimum à respecter)
        </AlertDescription>
      </Alert>
    </div>
  );
};
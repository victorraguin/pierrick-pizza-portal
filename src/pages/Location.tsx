import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const locations = [
  {
    name: "Pierrick Pizza - Restaurant",
    type: "restaurant",
    address: "1 Rue de la Pizza, 44580 Bourgneuf en Retz",
    coordinates: [-1.9876, 47.0123] as [number, number],
  },
  {
    name: "Distributeur Centre-ville",
    type: "distributeur",
    address: "Place du Marché, 44580 Bourgneuf en Retz",
    coordinates: [-1.9856, 47.0143] as [number, number],
  },
  {
    name: "Distributeur Zone Commerciale",
    type: "distributeur",
    address: "Zone Commerciale, 44580 Bourgneuf en Retz",
    coordinates: [-1.9896, 47.0103] as [number, number],
  },
];

const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      if (map.current) {
        map.current.remove();
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-1.9876, 47.0123],
        zoom: 14,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      locations.forEach((location) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.backgroundImage = `url(${
          location.type === "restaurant"
            ? "https://img.icons8.com/color/48/000000/restaurant.png"
            : "https://img.icons8.com/color/48/000000/pizza.png"
        })`;
        el.style.backgroundSize = "cover";

        new mapboxgl.Marker(el)
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3 class="font-semibold">${location.name}</h3><p>${location.address}</p>`
            )
          )
          .addTo(map.current);
      });

      setIsMapInitialized(true);
      toast.success("Carte initialisée avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'initialisation de la carte:", error);
      toast.error("Erreur lors de l'initialisation de la carte. Vérifiez votre clé API.");
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nous Trouver
          </h1>
          <p className="text-lg text-gray-600">
            Notre restaurant et nos distributeurs à Bourgneuf en Retz
          </p>
        </motion.div>

        {!isMapInitialized && (
          <div className="mb-8 max-w-md mx-auto space-y-4">
            <p className="text-sm text-gray-600">
              Pour afficher la carte, veuillez entrer votre clé API Mapbox publique :
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="Entrez votre clé API Mapbox"
                className="flex-grow"
              />
              <Button onClick={initializeMap} disabled={!mapboxToken}>
                Initialiser la carte
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Vous pouvez obtenir une clé API sur{" "}
              <a
                href="https://www.mapbox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                mapbox.com
              </a>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600">{location.address}</p>
              {location.type === "distributeur" && (
                <p className="text-sm text-pizza-600 mt-2">
                  Disponible 24h/24 et 7j/7
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <div ref={mapContainer} className="h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Location;
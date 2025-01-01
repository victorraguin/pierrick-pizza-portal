import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const locations = [
  {
    name: "Pierrick Pizza - Restaurant",
    type: "restaurant",
    address: "1 Rue de la Pizza, 44580 Bourgneuf en Retz",
    coordinates: [-1.9876, 47.0123], // À remplacer par les coordonnées réelles
  },
  {
    name: "Distributeur Centre-ville",
    type: "distributeur",
    address: "Place du Marché, 44580 Bourgneuf en Retz",
    coordinates: [-1.9856, 47.0143], // À remplacer par les coordonnées réelles
  },
  {
    name: "Distributeur Zone Commerciale",
    type: "distributeur",
    address: "Zone Commerciale, 44580 Bourgneuf en Retz",
    coordinates: [-1.9896, 47.0103], // À remplacer par les coordonnées réelles
  },
];

const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "VOTRE_CLE_MAPBOX"; // Remplacer par votre clé Mapbox

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-1.9876, 47.0123], // Centre sur le restaurant
      zoom: 14,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Ajouter les marqueurs
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

    return () => {
      map.current?.remove();
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
import { Star } from 'lucide-react';

export const ReviewsSection = () => {
  return (
    <div className="mt-12 relative">
      <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-10 -z-10"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80')" }}>
      </div>
      <h3 className="text-xl font-semibold text-pizza-500 mb-6 flex items-center gap-2">
        <Star className="w-6 h-6 text-yellow-400" />
        Avis de nos clients
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-pizza-50/90 backdrop-blur-sm rounded-xl border border-pizza-200 p-6 hover:transform hover:-translate-y-1 transition-all">
          <div className="flex items-center mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-pizza-500">5/5</span>
          </div>
          <p className="text-pizza-500 italic">
            "Très bonne pizzaria et pizzas généreuses servies avec amour et
            gentillesse Je recommande !"
          </p>
          <p className="text-pizza-400 mt-2 text-sm">- Flopy Corbel</p>
        </div>

        <div className="bg-pizza-50/90 backdrop-blur-sm rounded-xl border border-pizza-200 p-6 hover:transform hover:-translate-y-1 transition-all">
          <div className="flex items-center mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-pizza-500">5/5</span>
          </div>
          <p className="text-pizza-500 italic">
            "Bonne cuisine, personnel très aimable, emplacement et
            distributeur très pratiques"
          </p>
          <p className="text-pizza-400 mt-2 text-sm">- Pomme Poire</p>
        </div>

        <div className="bg-pizza-50/90 backdrop-blur-sm rounded-xl border border-pizza-200 p-6 hover:transform hover:-translate-y-1 transition-all">
          <div className="flex items-center mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-pizza-500">5/5</span>
          </div>
          <p className="text-pizza-500 italic">
            "Très bonne pizza avec une pâte fine comme je les aime ne change
            rien !!! Accueil chaleureux, bonne continuation à vous !!!"
          </p>
          <p className="text-pizza-400 mt-2 text-sm">- Julien Lagille</p>
        </div>
      </div>
    </div>
  );
};
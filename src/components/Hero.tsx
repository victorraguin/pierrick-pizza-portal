import { ChefHat, CookingPot, Pizza } from "lucide-react";

export const Hero = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8 relative">
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=60"
        alt="Pizza traditionnelle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <div className="flex justify-center mb-4">
            <Pizza className="w-16 h-16 text-orange-400 animate-spin-slow" />
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
  );
};
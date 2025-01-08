import { useState } from "react";
import { MenuTable } from "@/components/MenuTable";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MenuFilters } from "@/components/MenuFilters";
import { menuData } from "@/data/menuData";
import { Plus, Egg, Carrot, Beef, Pizza, Image, Star, Utensils, ChefHat, CookingPot } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showSeafood, setShowSeafood] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesVegetarian = !showVegetarian || item.isVegetarian;
      const matchesSeafood = !showSeafood || item.isSeafood;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesVegetarian && matchesSeafood && (!searchTerm || matchesSearch);
    });
  };

  const hasResults = Object.entries(menuData).some(([category, items]) => {
    if (selectedCategory !== "all" && selectedCategory !== category) return false;
    return filterItems(items).length > 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-pizza-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 perspective-1000">
        <div className="relative mb-12">
          <div className="absolute -left-4 sm:-left-8 top-1/2 transform -translate-y-1/2 max-w-[48px] overflow-hidden">
            <ChefHat className="w-12 h-12 text-orange-500/20 animate-bounce" />
          </div>
          <div className="absolute -right-4 sm:-right-8 top-1/2 transform -translate-y-1/2 max-w-[48px] overflow-hidden">
            <CookingPot className="w-12 h-12 text-orange-500/20 animate-bounce delay-100" />
          </div>
          <RestaurantInfo />
        </div>

        <div className="relative mb-12">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <Utensils className="w-8 h-8 text-orange-500" />
            Notre Menu
            <Pizza className="w-8 h-8 text-orange-500 animate-spin-slow" />
          </h2>

          <MenuFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showVegetarian={showVegetarian}
            setShowVegetarian={setShowVegetarian}
            showSeafood={showSeafood}
            setShowSeafood={setShowSeafood}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categories={Object.keys(menuData)}
          />
        </div>

        {!hasResults && (
          <Alert className="mb-8 bg-pizza-800/50 border-pizza-700">
            <AlertDescription className="text-pizza-300 text-center">
              Aucun plat ne correspond à votre recherche
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-12">
          {Object.entries(menuData).map(([category, items]) => {
            if (selectedCategory !== "all" && selectedCategory !== category) return null;
            
            const filteredItems = filterItems(items);
            if (filteredItems.length === 0) return null;

            return (
              <MenuTable 
                key={category}
                category={category}
                items={filteredItems}
              />
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 animate-fadeIn">
          <h3 className="text-xl font-semibold text-pizza-100 mb-4 flex items-center justify-center gap-2">
            <Plus className="w-5 h-5 text-orange-500" />
            Suppléments
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2 text-pizza-200 hover:text-orange-500 transition-colors">
              <Egg className="w-5 h-5" />
              <span>Œuf: 0,50€</span>
            </div>
            <div className="flex items-center space-x-2 text-pizza-200 hover:text-orange-500 transition-colors">
              <Carrot className="w-5 h-5" />
              <span>Légume: 1,00€</span>
            </div>
            <div className="flex items-center space-x-2 text-pizza-200 hover:text-orange-500 transition-colors">
              <Beef className="w-5 h-5" />
              <span>Viande: 2,00€</span>
            </div>
            <div className="flex items-center space-x-2 text-pizza-200 hover:text-orange-500 transition-colors">
              <Pizza className="w-5 h-5" />
              <span>Fromage: 1,50€</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-pizza-100 mb-6 flex items-center justify-center gap-2">
            <Image className="w-6 h-6 text-orange-500" />
            Notre pizzeria en images
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60"
                alt="Pizza margherita traditionnelle"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">Notre délicieuse Margherita traditionnelle</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1593504049359-74330189a345?w=800&auto=format&fit=crop&q=60"
                alt="Notre four à pizza traditionnel"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">Notre four à pizza traditionnel</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?w=800&auto=format&fit=crop&q=60"
                alt="Notre restaurant"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">L'ambiance chaleureuse de notre restaurant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-pizza-100 mb-6 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Avis de nos clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 p-6 hover:border-orange-500/50 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-pizza-200">5/5</span>
              </div>
              <p className="text-pizza-200 italic">"Excellentes pizzas, pâte fine et croustillante, garnitures généreuses et de qualité. Un vrai régal !"</p>
              <p className="text-pizza-300 mt-2 text-sm">- Marie L.</p>
            </div>

            <div className="bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 p-6 hover:border-orange-500/50 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-pizza-200">5/5</span>
              </div>
              <p className="text-pizza-200 italic">"Les meilleures pizzas du coin ! Service rapide et sympathique. Je recommande vivement."</p>
              <p className="text-pizza-300 mt-2 text-sm">- Thomas D.</p>
            </div>

            <div className="bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 p-6 hover:border-orange-500/50 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-pizza-200">5/5</span>
              </div>
              <p className="text-pizza-200 italic">"Très bonnes pizzas, produits frais et de qualité. Le camion est présent tous les dimanches à Chéméré, c'est super pratique !"</p>
              <p className="text-pizza-300 mt-2 text-sm">- Sophie B.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
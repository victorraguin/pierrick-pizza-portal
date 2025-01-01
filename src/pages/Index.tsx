import { useState } from "react";
import { MenuTable } from "@/components/MenuTable";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MenuFilters } from "@/components/MenuFilters";
import { menuData } from "@/data/menuData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showSeafood, setShowSeafood] = useState(false);

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesVegetarian = !showVegetarian || item.isVegetarian;
      const matchesSeafood = !showSeafood || item.isSeafood;

      return matchesSearch && matchesVegetarian && matchesSeafood;
    });
  };

  const hasResults = Object.entries(menuData).some(([category, items]) => {
    if (selectedCategory !== "all" && selectedCategory !== category) return false;
    return filterItems(items).length > 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pizza-900 via-pizza-800 to-pizza-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <RestaurantInfo />

        <MenuFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showVegetarian={showVegetarian}
          setShowVegetarian={setShowVegetarian}
          showSeafood={showSeafood}
          setShowSeafood={setShowSeafood}
          categories={Object.keys(menuData)}
        />

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

        <div className="mt-12 p-6 bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700">
          <h3 className="text-xl font-semibold text-pizza-100 mb-4">Suppléments</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-pizza-200">
            <div>Œuf: 0,50€</div>
            <div>Légume: 1,00€</div>
            <div>Viande: 2,00€</div>
            <div>Fromage: 1,50€</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
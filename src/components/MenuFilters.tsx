import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MenuFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showVegetarian: boolean;
  setShowVegetarian: (show: boolean) => void;
  showSeafood: boolean;
  setShowSeafood: (show: boolean) => void;
  categories: string[];
}

export const MenuFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  showVegetarian,
  setShowVegetarian,
  showSeafood,
  setShowSeafood,
  categories,
}: MenuFiltersProps) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pizza-400" />
        <Input
          type="text"
          placeholder="Rechercher un plat ou un ingrédient..."
          className="pl-10 w-full bg-pizza-800/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === "all"
              ? "bg-pizza-600 text-white"
              : "bg-pizza-800/50 text-pizza-300 border border-pizza-600"
          }`}
        >
          Tout
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-pizza-600 text-white"
                : "bg-pizza-800/50 text-pizza-300 border border-pizza-600"
            }`}
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => setShowVegetarian(!showVegetarian)}
          className={`px-4 py-2 rounded-full transition-colors ${
            showVegetarian
              ? "bg-green-600 text-white"
              : "bg-pizza-800/50 text-green-300 border border-green-600"
          }`}
        >
          🥬 Végétarien
        </button>
        <button
          onClick={() => setShowSeafood(!showSeafood)}
          className={`px-4 py-2 rounded-full transition-colors ${
            showSeafood
              ? "bg-blue-600 text-white"
              : "bg-pizza-800/50 text-blue-300 border border-blue-600"
          }`}
        >
          🐟 Fruits de mer
        </button>
      </div>
    </div>
  );
};
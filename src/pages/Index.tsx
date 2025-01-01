import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MenuTable } from "@/components/MenuTable";

const pizzaMenu = {
  "Pizzas Sauce Tomate": [
    {
      name: "Margarita",
      ingredients: ["Sauce tomate", "Fromage", "Origan"],
      price1P: "8.00",
      price2P: "10.00",
      isVegetarian: true,
    },
    {
      name: "Capri",
      ingredients: ["Sauce tomate", "Fromage", "Jambon", "Champignons"],
      price1P: "11.50",
      price2P: "13.50",
    },
    {
      name: "Capri (sans champi, jambon)",
      ingredients: ["Sauce tomate", "Fromage", "Jambon"],
      price1P: "11.00",
      price2P: "13.00",
    },
    {
      name: "Campestre",
      ingredients: ["Sauce tomate", "Fromage", "Champignons", "Olives", "Origan"],
      price1P: "10.00",
      price2P: "12.50",
      isVegetarian: true,
    },
    {
      name: "Casa",
      ingredients: ["Sauce tomate", "Fromage", "Lardons fumés", "Tomates fraîches"],
      price1P: "11.00",
      price2P: "13.00",
    },
    {
      name: "Napolitaine",
      ingredients: ["Sauce tomate", "Fromage", "Jambon", "Champignons", "Crème fraîche"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Végétarienne",
      ingredients: ["Sauce tomate", "Fromage", "Champignons", "Tomates fraîches", "Poivrons", "Olives"],
      price1P: "11.00",
      price2P: "13.00",
      isVegetarian: true,
    },
    {
      name: "4 Fromages",
      ingredients: ["Sauce tomate", "Fromage", "Gorgonzola", "Bleu", "Chèvre"],
      price1P: "11.50",
      price2P: "13.50",
    },
    {
      name: "Paysanne",
      ingredients: ["Sauce tomate", "Fromage", "Lardons fumés", "Crème fraîche"],
      price1P: "11.00",
      price2P: "13.50",
    },
    {
      name: "Orientale",
      ingredients: ["Sauce tomate", "Fromage", "Chorizo", "Merguez", "Poivrons"],
      price1P: "11.50",
      price2P: "14.00",
    },
    {
      name: "Bolo",
      ingredients: ["Sauce tomate", "Fromage", "Viande hachée", "Bolognaise", "Tomates fraîches", "Œuf"],
      price1P: "11.50",
      price2P: "13.50",
    },
    {
      name: "Pizza Burger",
      ingredients: ["Sauce tomate", "Viande hachée", "Oignons", "Bacon", "Cheddar", "Sauce burger"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "Bacon",
      ingredients: ["Sauce tomate", "Fromage", "Lardons", "Bacon"],
      price1P: "11.50",
      price2P: "13.00",
    },
    {
      name: "Bolo du Chef",
      ingredients: ["Sauce tomate", "Viande hachée", "Bolognaise", "Reblochon", "Œuf", "Bacon"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "Calzone",
      ingredients: ["Jambon", "Champignons", "Œuf"],
      price1P: "13.00",
    },
    {
      name: "Sami",
      ingredients: ["Jambon", "Lardons fumés", "Bacon", "Chorizo", "Merguez", "Reblochon", "Œuf"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "Chevreau",
      ingredients: ["Jambon", "Chèvre"],
      price1P: "11.00",
      price2P: "13.00",
    },
    {
      name: "Kébab",
      ingredients: ["Viande à kébab", "Tomates fraîches", "Sauce kébab"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Raclette",
      ingredients: ["Bacon", "Lardons fumés", "Fromage à raclette"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Campagnarde",
      ingredients: ["Pommes de terre", "Oignons", "Champignons", "Lardons fumés"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "Savoyarde",
      ingredients: ["Pommes de terre", "Lardons fumés", "Reblochon"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "Nantaise",
      ingredients: ["Curé nantais", "Champignons", "Jambon"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Neptune",
      ingredients: ["Thon", "Oignons", "Tomates fraîches"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Mer du Nord",
      ingredients: ["Saumon", "Tomates fraîches", "Crème fraîche", "Persillade"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Entre Deux Mer",
      ingredients: ["Champignons", "Saumon", "St-Jacques", "Ciboulette", "Crème fraîche"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "Pizza aux Anchois",
      ingredients: ["Anchois", "Olives", "Tomates fraîches"],
      price1P: "11.00",
      price2P: "13.50",
    },
    {
      name: "La Bergere",
      ingredients: ["Lardon", "Oignons", "Champignons", "Chèvre"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Jambon Cru",
      ingredients: ["Champignons", "Jambon cru", "Fromage tome"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Mini des Enfants",
      ingredients: ["Jambon"],
      price1P: "5.50",
    },
  ],
  "Pizzas Blanches": [
    {
      name: "La P'tite Bretonne",
      ingredients: ["Crème fraîche", "St-Jacques", "Fondu de poireaux", "Crevettes", "Fromage"],
      price1P: "12.50",
      price2P: "14.50",
      isSeafood: true,
    },
    {
      name: "Lucille",
      ingredients: ["Crème fraîche", "Oignons", "Lardons", "Fromage"],
      price1P: "12.00",
      price2P: "13.50",
    },
    {
      name: "Chevre-Miel",
      ingredients: ["Crème fraîche", "Fromage", "Jambon", "Chèvre", "Miel", "Olives"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Hawaïenne",
      ingredients: ["Crème fraîche", "Fromage", "Jambon", "Ananas", "Olives"],
      price1P: "12.00",
      price2P: "14.00",
    },
    {
      name: "Indienne",
      ingredients: ["Crème fraîche", "Filet de poulet", "Curry", "Poivrons", "Olives"],
      price1P: "12.00",
      price2P: "14.50",
    },
    {
      name: "Midi",
      ingredients: ["Crème fraîche", "Jambon cru", "Pommes de terre", "Raclette", "Olives"],
      price1P: "12.50",
      price2P: "14.50",
    },
    {
      name: "La Normande",
      ingredients: ["Lardons", "Champignons", "Camembert", "Olives"],
      price1P: "12.00",
      price2P: "14.50",
    },
  ],
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showSeafood, setShowSeafood] = useState(false);

  const filterPizzas = (pizzas) => {
    return pizzas.filter((pizza) => {
      const matchesSearch = 
        pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pizza.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesVegetarian = !showVegetarian || pizza.isVegetarian;
      const matchesSeafood = !showSeafood || pizza.isSeafood;

      return matchesSearch && matchesVegetarian && matchesSeafood;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pizza-900 via-pizza-800 to-pizza-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pizza-100 mb-4">
            Pierrick Pizza
          </h1>
          <p className="text-xl text-pizza-300">
            Les meilleures pizzas artisanales de Bourgneuf en Retz
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pizza-400" />
            <Input
              type="text"
              placeholder="Rechercher une pizza ou un ingrédient..."
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
              Toutes
            </button>
            {Object.keys(pizzaMenu).map((category) => (
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

        {/* Menu Tables */}
        <div className="space-y-12">
          {Object.entries(pizzaMenu).map(([category, pizzas]) => {
            if (selectedCategory !== "all" && selectedCategory !== category) return null;
            
            const filteredPizzas = filterPizzas(pizzas);
            if (filteredPizzas.length === 0) return null;

            return (
              <MenuTable 
                key={category}
                category={category}
                items={filteredPizzas}
              />
            );
          })}
        </div>

        {/* Supplements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700"
        >
          <h3 className="text-xl font-semibold text-pizza-100 mb-4">Suppléments</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-pizza-200">
            <div>Œuf: 0,50€</div>
            <div>Légume: 1,00€</div>
            <div>Viande: 2,00€</div>
            <div>Fromage: 1,50€</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

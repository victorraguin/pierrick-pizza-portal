import { motion } from "framer-motion";
import { Pizza, ChefHat, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen bg-gradient-to-br from-pizza-100 via-white to-pizza-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pizza-900 mb-4">
            Pierrick Pizza
          </h1>
          <p className="text-xl text-pizza-700">
            Les meilleures pizzas artisanales de Bourgneuf en Retz
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher une pizza ou un ingrédient..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === "all"
                  ? "bg-pizza-600 text-white"
                  : "bg-white text-pizza-600 border border-pizza-600"
              }`}
            >
              Toutes
            </button>
            {Object.keys(pizzaMenu).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-pizza-600 text-white"
                    : "bg-white text-pizza-600 border border-pizza-600"
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => setShowVegetarian(!showVegetarian)}
              className={`px-4 py-2 rounded-full ${
                showVegetarian
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
            >
              🥬 Végétarien
            </button>
            <button
              onClick={() => setShowSeafood(!showSeafood)}
              className={`px-4 py-2 rounded-full ${
                showSeafood
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
            >
              🐟 Fruits de mer
            </button>
          </div>
        </div>

        {/* Menu Display */}
        <div className="space-y-12">
          {Object.entries(pizzaMenu).map(([category, pizzas]) => {
            if (selectedCategory !== "all" && selectedCategory !== category) return null;
            
            const filteredPizzas = filterPizzas(pizzas);
            if (filteredPizzas.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-pizza-800 mb-6 flex items-center gap-2">
                  <Pizza className="w-6 h-6" />
                  {category}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPizzas.map((pizza) => (
                    <motion.div
                      key={pizza.name}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pizza-200 hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-pizza-900">
                          {pizza.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-sm text-pizza-600">1 pers: {pizza.price1P}€</div>
                          <div className="text-sm text-pizza-600">2 pers: {pizza.price2P}€</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-pizza-700">
                        {pizza.ingredients.join(", ")}
                      </p>
                      
                      <div className="mt-2 flex gap-1">
                        {pizza.isVegetarian && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Végétarien
                          </span>
                        )}
                        {pizza.isSeafood && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Fruits de mer
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supplements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 bg-white/90 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-pizza-800 mb-4">Suppléments</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-pizza-700">
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

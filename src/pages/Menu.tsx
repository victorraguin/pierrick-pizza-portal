import { motion } from "framer-motion";
import { Pizza, ChefHat, Flame } from "lucide-react";

const menuItems = [
  {
    category: "Les Classiques",
    description: "Les indémodables de la cuisine italienne",
    items: [
      {
        name: "Margherita",
        description: "Sauce tomate, mozzarella di bufala, basilic frais",
        price: "10.50",
        isSpicy: false,
        isChefSpecial: true,
      },
      {
        name: "Reine",
        description: "Sauce tomate, mozzarella, jambon blanc artisanal, champignons frais",
        price: "12.00",
        isSpicy: false,
        isChefSpecial: false,
      },
      {
        name: "4 Fromages",
        description: "Sauce tomate, mozzarella, gorgonzola DOP, chèvre fermier, parmesan 24 mois",
        price: "13.50",
        isSpicy: false,
        isChefSpecial: false,
      },
    ],
  },
  {
    category: "Les Spécialités",
    description: "Nos créations uniques et savoureuses",
    items: [
      {
        name: "Pierrick Spéciale",
        description: "Sauce tomate, mozzarella, chorizo ibérique, poivrons grillés, oignons rouges caramélisés, olives de Kalamata",
        price: "14.50",
        isSpicy: true,
        isChefSpecial: true,
      },
      {
        name: "Océane",
        description: "Crème fraîche d'Isigny, mozzarella, fruits de mer, persillade maison",
        price: "15.00",
        isSpicy: false,
        isChefSpecial: true,
      },
      {
        name: "Végétarienne",
        description: "Sauce tomate, mozzarella, légumes grillés de saison, champignons, roquette bio",
        price: "13.00",
        isSpicy: false,
        isChefSpecial: false,
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pizza-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Menu
          </h1>
          <p className="text-lg text-gray-600">
            Des pizzas artisanales préparées avec passion
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-pizza-800 mb-2 inline-flex items-center gap-2">
                  <Pizza className="w-6 h-6" />
                  {category.category}
                </h2>
                <p className="text-gray-600 italic">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-pizza-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-2 space-x-1">
                      {item.isSpicy && (
                        <span className="inline-flex items-center text-red-500" title="Piquant">
                          <Flame className="w-5 h-5" />
                        </span>
                      )}
                      {item.isChefSpecial && (
                        <span className="inline-flex items-center text-pizza-600" title="Spécialité du chef">
                          <ChefHat className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pizza-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-pizza-600 font-medium text-lg">
                        {item.price}€
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pizza-400 to-pizza-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center bg-pizza-50 p-8 rounded-lg"
        >
          <p className="text-gray-600">
            Tous nos prix sont en euros, TVA incluse.
            <br />
            Nos pizzas sont préparées avec des ingrédients frais et de qualité.
            <br />
            Pour toute allergie, merci de nous consulter.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
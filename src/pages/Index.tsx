import { motion } from "framer-motion";
import { ArrowRight, Pizza, ChefHat, Flame } from "lucide-react";
import { Link } from "react-router-dom";

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

const Index = () => {
  return (
    <div className="relative bg-gradient-to-b from-pizza-100 to-pizza-50">
      {/* Hero Section avec fond dégradé */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-pizza-800 to-pizza-600">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80')",
          }}
        />

        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pierrick Pizza
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Les meilleures pizzas artisanales de Bourgneuf en Retz
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-pizza-900 mb-4">Notre Menu</h2>
          <p className="text-lg text-pizza-700">Des pizzas préparées avec passion</p>
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
                <p className="text-pizza-600 italic">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pizza-200 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
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
                      <h3 className="text-lg font-semibold text-pizza-900 group-hover:text-pizza-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-pizza-600 font-medium text-lg">
                        {item.price}€
                      </span>
                    </div>
                    <p className="text-pizza-700 text-sm">{item.description}</p>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pizza-400 to-pizza-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hours Section avec fond dégradé */}
      <div className="py-20 bg-gradient-to-t from-pizza-100 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-pizza-900 mb-8">
              Nos Horaires
            </h2>
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-pizza-800 mb-2">
                  Mardi - Dimanche
                </h3>
                <p className="text-pizza-700">11h30 - 14h</p>
                <p className="text-pizza-700">18h - 22h</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-pizza-800 mb-2">Lundi</h3>
                <p className="text-pizza-700">Fermé</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
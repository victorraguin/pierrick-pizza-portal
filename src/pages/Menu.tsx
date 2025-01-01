import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Les Classiques",
    items: [
      {
        name: "Margherita",
        description: "Sauce tomate, mozzarella, basilic frais",
        price: "10.50",
      },
      {
        name: "Reine",
        description: "Sauce tomate, mozzarella, jambon, champignons",
        price: "12.00",
      },
      {
        name: "4 Fromages",
        description:
          "Sauce tomate, mozzarella, gorgonzola, chèvre, parmesan",
        price: "13.50",
      },
    ],
  },
  {
    category: "Les Spécialités",
    items: [
      {
        name: "Pierrick Spéciale",
        description:
          "Sauce tomate, mozzarella, chorizo, poivrons, oignons rouges, olives",
        price: "14.50",
      },
      {
        name: "Océane",
        description:
          "Crème fraîche, mozzarella, fruits de mer, persillade",
        price: "15.00",
      },
      {
        name: "Végétarienne",
        description:
          "Sauce tomate, mozzarella, légumes grillés, champignons, roquette",
        price: "13.00",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Menu</h1>
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
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-pizza-600 font-medium">
                        {item.price}€
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
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
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Tous nos prix sont en euros, TVA incluse.
            <br />
            Pour toute allergie, merci de nous consulter.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
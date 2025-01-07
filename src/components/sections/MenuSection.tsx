import { MenuTable } from '@/components/MenuTable';
import { MenuFilters } from '@/components/MenuFilters';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import { menuData } from '@/data/menuData';

export const MenuSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showSeafood, setShowSeafood] = useState(false);

  const filterItems = (items: any[], category: string) => {
    const isApplicableCategory = ['Pizzas Sauce Tomate', 'Pizzas Blanches', 'Nos Paninis', 'Nos Formules'].includes(category);

    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients?.some((ing: string) =>
          ing.toLowerCase().includes(searchTerm.toLowerCase())
        );

      if (!isApplicableCategory) return matchesSearch;

      const matchesVegetarian = showVegetarian ? item.isVegetarian : true;
      const matchesSeafood = showSeafood ? item.isSeafood : true;

      return matchesSearch && matchesVegetarian && matchesSeafood;
    });
  };

  const hasResults = Object.entries(menuData).some(([category, items]) => {
    if (selectedCategory === 'all') {
      return filterItems(items, category).length > 0;
    }
    return selectedCategory === category && filterItems(items, category).length > 0;
  });

  return (
    <div className="space-y-12 relative">
      <div className="relative z-10">
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
          <Alert className="mb-8 bg-pizza-800/50 border-pizza-700/50">
            <AlertDescription className="text-pizza-300 text-center">
              Aucun plat ne correspond à votre recherche
            </AlertDescription>
          </Alert>
        )}

        {Object.entries(menuData).map(([category, items], index) => {
          if (selectedCategory !== 'all' && selectedCategory !== category)
            return null;

          const filteredItems = filterItems(items, category);
          if (filteredItems.length === 0) return null;

          return (
            <div key={category} className="relative">
              <div className="relative z-10">
                <MenuTable category={category} items={filteredItems} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
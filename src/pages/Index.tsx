import { useState } from 'react'
import { MenuTable } from '@/components/MenuTable'
import { RestaurantInfo } from '@/components/RestaurantInfo'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { MenuFilters } from '@/components/MenuFilters'
import { menuData } from '@/data/menuData'

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showVegetarian, setShowVegetarian] = useState(false)
  const [showSeafood, setShowSeafood] = useState(false)

  // Définir les catégories applicables pour les filtres
  const applicableCategories = [
    'Pizzas Sauce Tomate',
    'Pizzas Blanches',
    'Nos Paninis',
    'Nos Formules'
  ]

  const handleVegetarianFilter = () => {
    setShowVegetarian(!showVegetarian)
    if (!showVegetarian) setShowSeafood(false) // Désactiver fruits de mer si végétarien activé
  }

  const handleSeafoodFilter = () => {
    setShowSeafood(!showSeafood)
    if (!showSeafood) setShowVegetarian(false) // Désactiver végétarien si fruits de mer activé
  }

  const filterItems = (items, category) => {
    const isApplicableCategory = applicableCategories.includes(category)

    return items.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.some(ing =>
          ing.toLowerCase().includes(searchTerm.toLowerCase())
        )

      // Ignorer les filtres pour les catégories non applicables
      if (!isApplicableCategory) return matchesSearch

      // Appliquer un seul filtre à la fois
      const matchesVegetarian = showVegetarian ? item.isVegetarian : true
      const matchesSeafood = showSeafood ? item.isSeafood : true

      return matchesSearch && matchesVegetarian && matchesSeafood
    })
  }

  const hasResults = Object.entries(menuData).some(([category, items]) => {
    if (selectedCategory === 'all') {
      return (
        applicableCategories.includes(category) &&
        filterItems(items, category).length > 0
      )
    }
    if (selectedCategory !== category) return false
    return filterItems(items, category).length > 0
  })

  return (
    <div className='min-h-screen bg-gradient-to-br from-pizza-900 via-pizza-800 to-pizza-900'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <RestaurantInfo />

        <MenuFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showVegetarian={showVegetarian}
          setShowVegetarian={handleVegetarianFilter} // Gestionnaire modifié
          showSeafood={showSeafood}
          setShowSeafood={handleSeafoodFilter} // Gestionnaire modifié
          categories={Object.keys(menuData)}
        />

        {!hasResults && (
          <Alert className='mb-8 bg-pizza-800/50 border-pizza-700'>
            <AlertDescription className='text-pizza-300 text-center'>
              Aucun plat ne correspond à votre recherche
            </AlertDescription>
          </Alert>
        )}

        <div className='space-y-12'>
          {Object.entries(menuData).map(([category, items]) => {
            if (selectedCategory !== 'all' && selectedCategory !== category)
              return null

            const filteredItems = filterItems(items, category)
            if (filteredItems.length === 0) return null

            return (
              <MenuTable
                key={category}
                category={category}
                items={filteredItems}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Index

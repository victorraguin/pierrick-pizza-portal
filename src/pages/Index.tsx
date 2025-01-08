import { useState } from 'react'

type MenuItem = {
  name: string
  ingredients: string[]
  price1P: string
  price2P?: string
  isVegetarian?: boolean
  isSeafood?: boolean
}
import { MenuTable } from '@/components/MenuTable'
import { RestaurantInfo } from '@/components/RestaurantInfo'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { MenuFilters } from '@/components/MenuFilters'
import { menuData } from '@/data/menuData'
import {
  Plus,
  Egg,
  Carrot,
  Beef,
  Pizza,
  Image,
  Star,
  Utensils
} from 'lucide-react'
import { Hero } from '@/components/Hero'

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Fonction de filtrage mise à jour
  const filterItems = items => {
    if (activeFilter === 'all') return items

    if (activeFilter === 'vegetarian') {
      return items.filter(item => item.isVegetarian)
    }

    if (activeFilter === 'seafood') {
      return items.filter(item => item.isSeafood)
    }

    // Sinon, c'est une catégorie spécifique
    return items
  }

  const filteredMenuData: { [key: string]: MenuItem[] } = Object.entries(
    menuData
  ).reduce((acc, [category, items]) => {
    if (
      activeFilter !== 'all' &&
      activeFilter !== 'vegetarian' &&
      activeFilter !== 'seafood' &&
      activeFilter !== category
    ) {
      return acc
    }

    const filteredItems = filterItems(items).filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.some(ing =>
          ing.toLowerCase().includes(searchTerm.toLowerCase())
        )
      return matchesSearch
    })

    if (filteredItems.length > 0) {
      acc[category] = filteredItems
    }

    return acc
  }, {})

  const hasResults = Object.keys(filteredMenuData).length > 0

  return (
    <div className='min-h-screen bg-gradient-to-t from-[#7F9651] via-[#8f3912] to-[#7F9651]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 perspective-1000'>
        <div className='relative mb-12'>
          <Hero />
          <RestaurantInfo />
        </div>

        <div className='relative mb-12'>
          <h2 className='text-4xl font-title text-white mb-8 flex items-center justify-center gap-4'>
            <Utensils className='w-8 h-8 text-orange-400' />
            Notre Menu
            <Pizza className='w-8 h-8 text-orange-400 animate-spin-slow' />
          </h2>

          <MenuFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categories={Object.keys(menuData)}
          />
        </div>

        {!hasResults && (
          <Alert className='mb-8 bg-pizza-800/50 border-pizza-700'>
            <AlertDescription className='text-pizza-300 text-center'>
              Aucun plat ne correspond à votre recherche
            </AlertDescription>
          </Alert>
        )}

        <div className='space-y-12'>
          {Object.entries(filteredMenuData).map(([category, items]) => (
            <MenuTable key={category} category={category} items={items} />
          ))}
        </div>

        <div className='mt-12 p-6 bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 animate-fadeIn'>
          <h3 className='text-xl font-title text-pizza-100 mb-4 flex items-center justify-center gap-2'>
            <Plus className='w-5 h-5 text-orange-400' />
            Suppléments
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='flex items-center space-x-2 text-pizza-200 hover:text-orange-400 transition-colors'>
              <Egg className='w-5 h-5' />
              <span>Œuf: 0,50€</span>
            </div>
            <div className='flex items-center space-x-2 text-pizza-200 hover:text-orange-400 transition-colors'>
              <Carrot className='w-5 h-5' />
              <span>Légume: 1,00€</span>
            </div>
            <div className='flex items-center space-x-2 text-pizza-200 hover:text-orange-400 transition-colors'>
              <Beef className='w-5 h-5' />
              <span>Viande: 2,00€</span>
            </div>
            <div className='flex items-center space-x-2 text-pizza-200 hover:text-orange-400 transition-colors'>
              <Pizza className='w-5 h-5' />
              <span>Fromage: 1,50€</span>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-xl font-title text-pizza-100 mb-6 flex items-center justify-center gap-2'>
            <Image className='w-6 h-6 text-orange-400' />
            Notre pizzeria en images
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='group relative overflow-hidden rounded-lg'>
              <img
                src='/public/pierrick-pizza-pizzeria.PNG'
                alt='Pizza traditionnelle'
                className='w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                <p className='text-white text-sm'>
                  Restaurant à Bourgneuf en Retz
                </p>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-lg'>
              <img
                src='/public/pizza-pierrick-pizza.PNG'
                alt='Pizza traditionnelle'
                className='w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                <p className='text-white text-sm'>Pizza traditionnelle</p>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-lg'>
              <img
                src='/public/pierrick-pizza.PNG'
                alt='Notre restaurant'
                className='w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                <p className='text-white text-sm'>
                  L'ambiance chaleureuse de notre restaurant
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-xl font-title text-pizza-100 mb-6 flex items-center justify-center gap-2'>
            <Star className='w-6 h-6 text-yellow-400' />
            Avis de nos clients
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 p-6 hover:border-orange-400/50 transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 text-yellow-400 fill-yellow-400'
                    />
                  ))}
                </div>
                <span className='ml-2 text-pizza-200'>5/5</span>
              </div>
              <p className='text-pizza-200 italic'>
                "Excellentes pizzas, pâte fine et croustillante, garnitures
                généreuses et de qualité. Un vrai régal !"
              </p>
              <p className='text-pizza-300 mt-2 text-sm'>- Marie L.</p>
            </div>

            <div className='bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 p-6 hover:border-orange-400/50 transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 text-yellow-400 fill-yellow-400'
                    />
                  ))}
                </div>
                <span className='ml-2 text-pizza-200'>5/5</span>
              </div>
              <p className='text-pizza-200 italic'>
                "Les meilleures pizzas du coin ! Service rapide et sympathique.
                Je recommande vivement."
              </p>
              <p className='text-pizza-300 mt-2 text-sm'>- Thomas D.</p>
            </div>

            <div className='bg-pizza-800/50 backdrop-blur-sm rounded-xl border border-pizza-700 p-6 hover:border-orange-400/50 transition-colors duration-300'>
              <div className='flex items-center mb-2'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 text-yellow-400 fill-yellow-400'
                    />
                  ))}
                </div>
                <span className='ml-2 text-pizza-200'>5/5</span>
              </div>
              <p className='text-pizza-200 italic'>
                "Très bonnes pizzas, produits frais et de qualité. Le camion est
                présent tous les dimanches à Chéméré, c'est super pratique !"
              </p>
              <p className='text-pizza-300 mt-2 text-sm'>- Sophie B.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

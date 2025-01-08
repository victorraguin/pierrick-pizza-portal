import { Input } from '@/components/ui/input'

interface MenuFiltersProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  categories: string[]
}

export const MenuFilters = ({
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
  categories
}: MenuFiltersProps) => {
  return (
    <div className='mb-8'>
      <div className='flex flex-wrap gap-2 place-content-center'>
        {/* Bouton "Tout" */}
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'all'
              ? 'bg-orange-400 text-orange-100'
              : 'bg-orange-600/50 text-orange-200 border border-orange-300'
          }`}
        >
          Tout
        </button>

        {/* Boutons des catégories */}
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === category
                ? 'bg-orange-300 text-[#1A1F2C]'
                : 'bg-[#000000FF]/70 text-orange-300 border border-orange-300'
            }`}
          >
            {category}
          </button>
        ))}

        {/* Bouton "Végétarien" */}
        <button
          onClick={() => setActiveFilter('vegetarian')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'vegetarian'
              ? 'bg-orange-400 text-orange-100'
              : 'bg-orange-600/50 text-orange-200 border border-orange-300'
          }`}
        >
          🥬 Végétarien
        </button>

        {/* Bouton "Fruits de mer" */}
        <button
          onClick={() => setActiveFilter('seafood')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'seafood'
              ? 'bg-orange-400 text-orange-100'
              : 'bg-orange-600/50 text-orange-200 border border-orange-300'
          }`}
        >
          🐟 Fruits de mer
        </button>
      </div>
    </div>
  )
}

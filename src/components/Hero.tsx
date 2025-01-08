import { ChefHat, CookingPot, Pizza } from 'lucide-react'

export const Hero = () => {
  return (
    <div className='w-full h-[350px] md:h-[400px] rounded-xl overflow-hidden mb-8 relative'>
      <img
        src='/public/pierrick-pizza-pizzeria.PNG'
        alt='Pizza traditionnelle'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/30' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center space-y-4 px-4'>
          <div className='flex justify-center mb-4'>
            <Pizza className='w-16 h-16 text-[#7F9651] animate-spin-slow' />
          </div>
          <h1 className='text-4xl md:text-6xl font-title text-white mb-4 drop-shadow-lg'>
            Pierrick Pizzas
          </h1>
          <p className='text-xl text-orange-100 drop-shadow-lg flex items-center justify-center gap-2'>
            Pizzas, paninis et burgers à emporter sur le Pays de Retz
          </p>
          <div className='flex flex-col md:flex-row gap-4 justify-center mt-6 w-3/4 md:w-full mx-auto'>
            <a
              href='tel:0240821068'
              className='bg-[#7F9651] text-white px-4 py-2 rounded-lg text-sm md:text-base shadow-md hover:bg-[#6b8145] transition duration-300'
            >
              Appeler le Restaurant
            </a>
            <a
              href='tel:0681404029'
              className='bg-[#7F9651] text-white px-4 py-2 rounded-lg text-sm md:text-base shadow-md hover:bg-[#6b8145] transition duration-300'
            >
              Appeler le Mobile (Camion)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

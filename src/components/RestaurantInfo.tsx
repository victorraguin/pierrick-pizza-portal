import { MapPin, Phone, Clock, Truck } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const RestaurantInfo = () => {
  return (
    <div className='mb-12 space-y-6 animate-fadeIn'>
      <div className='relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8'>
        <div className='absolute inset-0 bg-black/50 z-10' />
        <img
          src='https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80'
          alt='Pizza artisanale'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-pizza-900 to-transparent z-20' />
      </div>

      <div className='text-center space-y-2 relative z-30'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
          Pierrick Pizza
        </h1>
        <p className='text-xl text-pizza-300'>
          Pizzas à emporter sur le Pays de Retz
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Alert className='bg-pizza-900/30 border-pizza-800/30'>
          <MapPin className='h-5 w-5 text-pizza-300' />
          <AlertDescription className='text-pizza-200'>
            <strong className='text-pizza-100 block mb-1'>Adresse</strong>
            <a
              href='https://maps.app.goo.gl/5pPLotAvtg1nNkz3A'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pizza-100 hover:underline'
            >
              4 RUE DES JAUNINS
              <br />
              BOURGNEUF EN RETZ
              <br />
            </a>
            <span className='text-sm'>
              (Zone des Jaunins, face au garage Renault)
            </span>
          </AlertDescription>
        </Alert>

        <Alert className='bg-pizza-900/30 border-pizza-800/30'>
          <Clock className='h-5 w-5 text-pizza-300' />
          <AlertDescription className='text-pizza-200'>
            <strong className='text-pizza-100 block mb-1'>
              Horaires du magasin
            </strong>
            Mardi au Dimanche : à partir de 18H
            <br />
            Jeudi et Vendredi : 12H-14H
            <br />
            <span className='text-pizza-500'>Fermé le Lundi</span>
          </AlertDescription>
        </Alert>

        <Alert className='bg-pizza-900/30 border-pizza-800/30'>
          <Phone className='h-5 w-5 text-pizza-300' />
          <AlertDescription className='text-pizza-200'>
            <strong className='text-pizza-100 block mb-1'>Contact</strong>
            <a href='tel:0240821068' className='text-pizza-100 hover:underline'>
              Restaurant : 02 40 82 10 68
            </a>
            <br />
            <a href='tel:0681404029' className='text-pizza-100 hover:underline'>
              Mobile : 06 81 40 40 29 (Camion)
            </a>
          </AlertDescription>
        </Alert>

        <Alert className='bg-pizza-900/30 border-pizza-800/30'>
          <Truck className='h-5 w-5 text-pizza-300' />
          <AlertDescription className='text-pizza-200'>
            <strong className='text-pizza-100 block mb-1'>
              Le camion (18h-22h)
            </strong>
            Mardi : St Hilaire de Chaléons
            <br />
            Mercredi : Fresnay-en-Retz
            <br />
            Vendredi : Arthon-en-Retz
            <br />
            Dimanche : Chéméré
          </AlertDescription>
        </Alert>
      </div>

      <Alert className='bg-pizza-800/30 border-pizza-700/30'>
        <AlertDescription className='text-pizza-300 text-center'>
          Distributeur de boissons et de pizzas disponible sur le parking
          <br />
          Nous nous déplaçons également sur des concerts et des manifestations
          (nombre de personnes minimum à respecter)
        </AlertDescription>
      </Alert>
    </div>
  )
}

import { MapPin, Phone, Clock, Truck } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const RestaurantInfo = () => {
  return (
    <div className='mb-12 space-y-6 animate-fadeIn'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Alert className='bg-gradient-to-br from-[#7F9651]/10 to-red-600/10 border-[#7F9651]/20 hover:-translate-y-1 ease-in-out transition-all duration-300 '>
          <MapPin className='h-5 w-5 text-[#7F9651]' />
          <AlertDescription className='text-gray-800'>
            <p className='text-[#7F9651] text-lg font-title block mb-1'>
              Adresse
            </p>
            <a
              href='https://maps.app.goo.gl/5oW366v31EzdqSUG9'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-800 hover:underline'
            >
              4 RUE DES JAUNINS
              <br />
              BOURGNEUF EN RETZ
            </a>
            <br />
            <span className='text-gray-600'>
              (Zone des Jaunins, face au garage Renault)
            </span>
          </AlertDescription>
        </Alert>

        <Alert className='bg-gradient-to-br from-[#7F9651]/10 to-red-600/10 border-[#7F9651]/20 hover:-translate-y-1 ease-in-out transition-all duration-300 '>
          <Clock className='h-5 w-5 text-[#7F9651]' />
          <AlertDescription className='text-gray-800'>
            <p className='text-[#7F9651] font-title text-lg block mb-1'>
              Horaires du magasin
            </p>
            Mardi au Dimanche : à partir de 18H
            <br />
            Jeudi et Vendredi : 12H-14H
            <br />
            <span className='text-gray-600'>Fermé le Lundi</span>
          </AlertDescription>
        </Alert>

        <Alert className='bg-gradient-to-br from-[#7F9651]/10 to-red-600/10 border-[#7F9651]/20 hover:-translate-y-1 ease-in-out transition-all duration-300 '>
          <Phone className='h-5 w-5 text-[#7F9651]' />
          <AlertDescription className='text-gray-800'>
            <p className='text-[#7F9651] font-title text-lg block mb-1'>
              Contact
            </p>
            <a href='tel:0240821068' className='text-gray-800 hover:underline'>
              Restaurant : 02 40 82 10 68
            </a>
            <br />
            <a href='tel:0681404029' className='text-gray-800 hover:underline'>
              Mobile : 06 81 40 40 29 (Camion)
            </a>
          </AlertDescription>
        </Alert>

        <Alert className='bg-gradient-to-br from-[#7F9651]/10 to-red-600/10 border-[#7F9651]/20 hover:-translate-y-1 ease-in-out transition-all duration-300'>
          <Truck className='h-5 w-5 text-[#7F9651]' />
          <AlertDescription className='text-gray-800'>
            <p className='text-[#7F9651] font-title text-lg block mb-1'>
              Le camion (18h-22h)
            </p>
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

      <Alert className='bg-gradient-to-br from-[#7F9651]/10 to-red-600/10 border-[#7F9651]/20 hover:-translate-y-1 ease-in-out transition-all duration-300 '>
        <AlertDescription className='text-gray-800 text-center text-md'>
          Distributeur de boissons et de pizzas disponible sur le parking
          <br />
          Nous nous déplaçons également sur des concerts et des manifestations
          (nombre de personnes minimum à respecter)
        </AlertDescription>
      </Alert>
    </div>
  )
}

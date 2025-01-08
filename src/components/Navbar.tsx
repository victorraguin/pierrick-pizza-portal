import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/contact', label: 'Contact' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#EEEEEE] backdrop-blur-md z-50 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link
              to='/'
              className='text-xl sm:text-2xl font-title text-[#7F9651] px-2 sm:px-0'
            >
              Pierrick Pizzas
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-pizza-600 font-medium'
                    : 'text-gray-600 hover:text-pizza-500'
                } transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 hover:text-pizza-500 focus:outline-none p-2'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-100'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-pizza-600 bg-pizza-50'
                    : 'text-gray-600 hover:text-pizza-500 hover:bg-pizza-50'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

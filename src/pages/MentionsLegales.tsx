const MentionsLegales = () => {
  return (
    <div className='py-12 bg-gradient-to-br from-pizza-900 via-pizza-800 to-pizza-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-bold text-pizza-100 mb-4'>
            Mentions légales
          </h1>
          <p className='text-lg text-pizza-200'>
            Ce site est hébergé par Victor Raguin, et est sous licence MIT.
          </p>

          <h2 className='text-2xl font-bold text-pizza-100 mb-4'>
            Hébergement
          </h2>
          <p className='text-lg text-pizza-200'>
            Ce site est hébergé par Netlify, qui fournit les services de
            hébergement gratuits.
          </p>

          <h2 className='text-2xl font-bold text-pizza-100 mb-4'>Cookies</h2>
          <p className='text-lg text-pizza-200'>
            Ce site n'utilise pas de cookies.
          </p>

          <h2 className='text-2xl font-bold text-pizza-100 mb-4'>Sécurité</h2>
          <p className='text-lg text-pizza-200'>
            Le site est protégé par un certificat SSL, ce qui signifie que votre
            navigateur est en mesure de communiquer avec le site en toute
            sécurité.
          </p>

          <h2 className='text-2xl font-bold text-pizza-100 mb-4'>
            Propriété intellectuelle
          </h2>
          <p className='text-lg text-pizza-200'>
            Le contenu de ce site est la propriété de Victor Raguin, et est
            protégé par les lois applicables en France.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales

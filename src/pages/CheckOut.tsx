/* eslint-disable no-irregular-whitespace */
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import PayPalSubscribeButton from '@/components/PayPalSubscription'
import { CircleDot } from 'lucide-react' // Import d'un icône spinner

/**
 * Interface permettant de définir les différents statuts
 * liés à l'envoi d'e-mails et la génération PDF.
 */
type SendStatus = 'idle' | 'success' | 'error' | 'loading'

/**
 * Interface pour la gestion du résultat de paiement PayPal
 */
interface PaymentResult {
  status: 'idle' | 'success' | 'error'
  subscriptionID?: string
  errorMessage?: string
}

const CheckOut = () => {
  // État pour gérer l’ouverture/fermeture de la modale (formulaire client)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // État du formulaire (informations du client)
  const [clientData, setClientData] = useState({
    typeClient: 'physique', // 'physique' ou 'morale'
    name: '',
    siret: '',
    address: '',
    phone: '',
    email: '',
    offer: 'basique'
  })

  // État pour l’envoi des e-mails et du PDF
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle')

  // État pour le résultat du paiement PayPal
  const [paymentResult, setPaymentResult] = useState<PaymentResult>({
    status: 'idle'
  })

  // Ouvre la modale
  const handleOpenModal = () => {
    setIsModalOpen(true)
    // Réinitialiser sendStatus lors de l'ouverture de la modal
    setSendStatus('idle')
  }

  // Ferme la modale
  const handleCloseModal = () => {
    if (sendStatus !== 'loading') {
      // Empêche la fermeture pendant le chargement
      setIsModalOpen(false)
    }
  }

  /**
   * Soumission du formulaire client : envoie l'e-mail "nouveau client"
   * + génère/envoie le PDF "contrat" (sendStatus).
   */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendStatus('loading') // indique qu'on envoie les requêtes

    try {
      // 1) Envoyer un premier e-mail simple (ex: "nouveau client")
      const responseEmail = await fetch(
        'https://email-server-xkja.onrender.com/api/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: 'victor.raguin@live.fr', // ou clientData.email si besoin
            subject: 'Nouveau client - Souscription',
            text: `Type: ${clientData.typeClient}
Nom: ${clientData.name}
SIRET: ${clientData.siret}
Adresse: ${clientData.address}
Téléphone: ${clientData.phone}
Email: ${clientData.email}`,
            html: `
              <h1>Nouveau client</h1>
              <p><strong>Type :</strong> ${clientData.typeClient}</p>
              <p><strong>Nom :</strong> ${clientData.name}</p>
              <p><strong>SIRET :</strong> ${clientData.siret || 'N/A'}</p>
              <p><strong>Adresse :</strong> ${clientData.address}</p>
              <p><strong>Téléphone :</strong> ${clientData.phone}</p>
              <p><strong>Email :</strong> ${clientData.email}</p>
            `
          })
        }
      )

      if (!responseEmail.ok) {
        throw new Error(
          'Erreur lors de l’envoi de l’email simple: ' +
            (await responseEmail.text())
        )
      }

      // 2) Envoyer le contrat PDF (via /api/send-contract)
      const responseContract = await fetch(
        'https://email-server-xkja.onrender.com/api/send-contract',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clientData })
        }
      )

      if (!responseContract.ok) {
        throw new Error(
          'Erreur lors de l’envoi du contrat: ' +
            (await responseContract.text())
        )
      }

      // Si tout est OK, on passe en "success"
      setSendStatus('success')
      // On ferme la modale
      setIsModalOpen(false)
    } catch (error) {
      console.error(error)
      // Si une erreur survient, on passe en "error"
      setSendStatus('error')
    }
  }

  /**
   * Callback pour gérer le résultat du paiement PayPal
   * (remonté depuis PayPalSubscribeButton).
   */
  const handleSubscriptionResult = (
    success: boolean,
    subscriptionID?: string,
    errorMessage?: string
  ) => {
    if (success) {
      setPaymentResult({
        status: 'success',
        subscriptionID
      })
    } else {
      setPaymentResult({
        status: 'error',
        errorMessage: errorMessage || 'Une erreur PayPal est survenue'
      })
    }
  }

  return (
    <div className='py-12 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl font-bold text-pizza-100 mb-4'>
            Abonnement Site Vitrine
          </h1>
          <p className='text-lg text-pizza-200'>
            Créez votre présence en ligne pour 300€ + 15€/mois. Nous nous
            occupons de tout !
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Colonne gauche : détail de l'offre */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-pizza-800/50 border border-pizza-700 rounded-lg p-6 text-pizza-100 space-y-4'
          >
            <h2 className='text-2xl font-semibold mb-3'>Notre Offre</h2>
            <p>
              Profitez d’un{' '}
              <span className='font-semibold text-orange-300'>
                site vitrine clé en main
              </span>{' '}
              :
            </p>
            <ul className='list-disc list-inside space-y-2 mt-2'>
              <li>Conception et design professionnel</li>
              <li>Nom de domaine &amp; hébergement inclus</li>
              <li>Maintenance et mises à jour régulières</li>
              <li>Support et assistance technique</li>
            </ul>
            <p className='mt-4'>
              <span className='font-bold text-orange-300'>
                Frais de création
              </span>{' '}
              : 300€
            </p>
            <p className='mb-4'>
              <span className='font-bold text-orange-300'>
                Abonnement mensuel
              </span>{' '}
              : 15€/mois
            </p>
            <hr className='border-pizza-700' />
            <p className='text-pizza-200 mt-2'>
              Idéal pour les entrepreneurs, commerçants et artisans souhaitant
              être présents en ligne, sans se soucier de la partie technique !
            </p>
          </motion.div>

          {/* Colonne droite : bloc d'abonnement + bouton PayPal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-pizza-800/50 border border-pizza-700 rounded-lg p-6 text-pizza-100 flex flex-col justify-between'
          >
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold mb-3'>Passez à l'action</h2>
              <p>
                En souscrivant dès maintenant, votre site vitrine sera en ligne
                en seulement quelques jours.
              </p>
              <p className='text-pizza-200'>
                Cliquez sur « Souscrire » pour renseigner vos informations et
                générer votre contrat.
              </p>

              {/* État d’envoi en cours (emails/PDF) */}
              {sendStatus === 'loading' && (
                <div className='flex items-center space-x-2 text-blue-400'>
                  <CircleDot className='animate-spin h-5 w-5' />
                  <span>
                    Création du contrat en cours... Cela peut prendre un moment.
                    Veuillez ne pas quitter la page.
                  </span>
                </div>
              )}

              {/* État succès (emails/PDF) */}
              {sendStatus === 'success' && (
                <p className='text-green-400'>
                  Vos informations et votre contrat PDF ont bien été envoyés à
                  votre adresse e-mail. Il ne vous reste plus qu’à finaliser le
                  paiement en cliquant sur le bouton PayPal ci-dessous pour
                  valider définitivement votre abonnement.
                </p>
              )}

              {/* État erreur (emails/PDF) */}
              {sendStatus === 'error' && (
                <p className='text-red-400'>
                  Oups, une erreur est survenue lors de l’envoi. Veuillez
                  réessayer ou vérifier votre connexion.
                </p>
              )}

              {/* Affichage du résultat du paiement PayPal */}
              {paymentResult.status === 'success' && (
                <div className='bg-green-100 text-green-800 p-4 rounded'>
                  <h3 className='font-bold mb-2'>Félicitations !</h3>
                  <p>Votre paiement PayPal est validé.</p>
                  {paymentResult.subscriptionID && (
                    <p>
                      Identifiant d’abonnement :{' '}
                      <strong>{paymentResult.subscriptionID}</strong>
                    </p>
                  )}
                  <ul className='mt-2 space-y-1'>
                    <li>✓ Emails envoyés</li>
                    <li>✓ Contrat généré et envoyé</li>
                    <li>✓ Abonnement PayPal validé</li>
                  </ul>

                  {/* Petit récap du client */}
                  <div className='mt-3'>
                    <h4 className='font-semibold'>
                      Récapitulatif de vos informations :
                    </h4>
                    <ul className='list-disc list-inside ml-4'>
                      <li>Type de client : {clientData.typeClient}</li>
                      <li>Nom : {clientData.name}</li>
                      <li>SIRET : {clientData.siret || 'N/A'}</li>
                      <li>Adresse : {clientData.address}</li>
                      <li>Téléphone : {clientData.phone}</li>
                      <li>Email : {clientData.email}</li>
                    </ul>
                  </div>
                </div>
              )}

              {paymentResult.status === 'error' && (
                <div className='bg-red-100 text-red-800 p-4 rounded'>
                  <h3 className='font-bold mb-2'>Erreur PayPal</h3>
                  <p>{paymentResult.errorMessage}</p>
                </div>
              )}
            </div>

            <div className='mt-8 flex flex-col items-center'>
              {/* Bouton pour ouvrir la modale de formulaire, seulement si on n’a pas encore envoyé les infos */}
              {sendStatus === 'idle' && (
                <button
                  onClick={handleOpenModal}
                  className='bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded transition-colors'
                >
                  Souscrire
                </button>
              )}

              {/* On affiche le bouton PayPal seulement si l’envoi d’emails/PDF est OK (sendStatus === 'success') */}
              {sendStatus === 'success' && paymentResult.status === 'idle' && (
                <PayPalSubscribeButton
                  onSubscriptionResult={handleSubscriptionResult}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal : Formulaire de souscription */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-orange-800 border border-pizza-700 rounded-lg p-6 w-full max-w-md text-pizza-100 relative'
          >
            {/* Bouton de fermeture uniquement si pas en cours de chargement */}
            {sendStatus !== 'loading' && (
              <button
                onClick={handleCloseModal}
                className='absolute top-3 right-3 text-pizza-200 hover:text-white'
                aria-label='Fermer la modal'
              >
                &times;
              </button>
            )}

            {/* Contenu de la modal en fonction du statut */}
            {sendStatus === 'loading' ? (
              <div className='flex flex-col items-center justify-center h-64'>
                <CircleDot className='animate-spin h-10 w-10 text-orange-400 mb-4' />
                <p className='text-center'>
                  Création du contrat en cours... Cela peut prendre un moment.
                  Veuillez ne pas quitter la page.
                </p>
              </div>
            ) : (
              <>
                <h3 className='text-xl font-bold mb-4'>Informations Client</h3>
                <form onSubmit={handleFormSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-sm mb-1'>
                      Type de client :
                    </label>
                    <div className='flex items-center gap-4'>
                      <label className='inline-flex items-center'>
                        <input
                          type='radio'
                          name='typeClient'
                          value='physique'
                          checked={clientData.typeClient === 'physique'}
                          onChange={e =>
                            setClientData({
                              ...clientData,
                              typeClient: e.target.value
                            })
                          }
                          className='form-radio text-pizza-600'
                        />
                        <span className='ml-2'>Personne physique</span>
                      </label>
                      <label className='inline-flex items-center'>
                        <input
                          type='radio'
                          name='typeClient'
                          value='morale'
                          checked={clientData.typeClient === 'morale'}
                          onChange={e =>
                            setClientData({
                              ...clientData,
                              typeClient: e.target.value
                            })
                          }
                          className='form-radio text-pizza-600'
                        />
                        <span className='ml-2'>Personne morale</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm mb-1'>
                      Nom / Raison sociale
                    </label>
                    <input
                      type='text'
                      required
                      value={clientData.name}
                      onChange={e =>
                        setClientData({ ...clientData, name: e.target.value })
                      }
                      className='w-full bg-orange-900 border border-pizza-700 text-pizza-100 rounded px-3 py-2'
                    />
                  </div>

                  <div>
                    <label className='block text-sm mb-1'>
                      SIRET (si personne morale)
                    </label>
                    <input
                      type='text'
                      value={clientData.siret}
                      onChange={e =>
                        setClientData({ ...clientData, siret: e.target.value })
                      }
                      className='w-full bg-orange-900 border border-pizza-700 text-pizza-100 rounded px-3 py-2'
                      placeholder='Ex: 123 456 789 00012'
                    />
                  </div>

                  <div>
                    <label className='block text-sm mb-1'>Adresse</label>
                    <input
                      type='text'
                      required
                      value={clientData.address}
                      onChange={e =>
                        setClientData({
                          ...clientData,
                          address: e.target.value
                        })
                      }
                      className='w-full bg-orange-900 border border-pizza-700 text-pizza-100 rounded px-3 py-2'
                    />
                  </div>

                  <div>
                    <label className='block text-sm mb-1'>Téléphone</label>
                    <input
                      type='tel'
                      required
                      value={clientData.phone}
                      onChange={e =>
                        setClientData({ ...clientData, phone: e.target.value })
                      }
                      className='w-full bg-orange-900 border border-pizza-700 text-pizza-100 rounded px-3 py-2'
                    />
                  </div>

                  <div>
                    <label className='block text-sm mb-1'>E-mail</label>
                    <input
                      type='email'
                      required
                      value={clientData.email}
                      onChange={e =>
                        setClientData({ ...clientData, email: e.target.value })
                      }
                      className='w-full bg-orange-900 border border-pizza-700 text-pizza-100 rounded px-3 py-2'
                    />
                  </div>

                  {/* Boutons d'action */}
                  <div className='flex justify-end mt-6 gap-4'>
                    <button
                      type='button'
                      onClick={handleCloseModal}
                      className='bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors'
                      disabled={sendStatus === ('loading' as never)}
                    >
                      Annuler
                    </button>
                    <button
                      type='submit'
                      className='bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-colors'
                      disabled={sendStatus === ('loading' as never)}
                    >
                      Valider
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default CheckOut

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Valider les données du formulaire avant l'envoi
    if (
      !formData.name ||
      !formData.firstName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs requis.',
        variant: 'destructive'
      })
      return
    }

    setIsSubmitting(true)
    toast({
      title: 'Envoi en cours...',
      description:
        'Veuillez patienter pendant que nous envoyons votre message.',
      duration: 2000
    })

    try {
      const response = await fetch(
        'https://email-server-xkja.onrender.com/api/send-email',
        {
          // Remplacez par l'URL de votre backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to: 'contact@pierrick-pizza.fr', // Remplacez par votre adresse e-mail ou celle du destinataire
            subject: `Nouveau message de ${formData.firstName} ${formData.name}`,
            text: `Vous avez reçu un nouveau message de ${formData.firstName} ${formData.name} (${formData.email}, ${formData.phone}) :

${formData.message}`,
            html: `
            <h1>Nouveau message de ${formData.firstName} ${formData.name}</h1>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            <p><strong>Message :</strong><br/>${formData.message.replace(
              /\n/g,
              '<br/>'
            )}</p>
          `
          })
        }
      )

      if (response.ok) {
        toast({
          title: 'Message envoyé',
          description: 'Nous vous répondrons dans les plus brefs délais.',
          variant: 'default'
        })
        setFormData({
          name: '',
          firstName: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        const errorData = await response.json()
        throw new Error(
          errorData.message || "Erreur lors de l'envoi de l'email"
        )
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error)
      toast({
        title: 'Erreur',
        description:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='py-12 bg-gradient-to-br from-[#7F9651] via-pizza-500 to-pizza-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl font-bold text-pizza-100 mb-4'>Contact</h1>
          <p className='text-lg text-pizza-200'>
            Une question ? N'hésitez pas à nous contacter
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='space-y-8'>
              <div>
                <h2 className='text-2xl font-semibold text-pizza-100 mb-6'>
                  Informations
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <Phone className='w-5 h-5 text-pizza-300 mt-1 mr-3' />
                    <div>
                      <p className='font-medium text-pizza-100'>Téléphone</p>
                      <a
                        href='tel:0240821068'
                        className='text-pizza-200 hover:text-pizza-300 transition-colors'
                      >
                        02 40 82 10 68
                      </a>
                      <br />
                      <a
                        href='tel:0681404029'
                        className='text-pizza-200 hover:text-pizza-300 transition-colors'
                      >
                        06 81 40 40 29
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <MapPin className='w-5 h-5 text-pizza-300 mt-1 mr-3' />
                    <div>
                      <p className='font-medium text-pizza-100'>Adresse</p>
                      <p className='text-pizza-200'>
                        4 Rue des Jaunins
                        <br />
                        Bourgneuf en Retz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-pizza-100 mb-1'
                >
                  Nom
                </label>
                <Input
                  id='name'
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className='bg-pizza-600/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400'
                />
              </div>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-pizza-100 mb-1'
                >
                  Prénom
                </label>
                <Input
                  id='firstName'
                  value={formData.firstName}
                  onChange={e =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                  className='bg-pizza-600/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-pizza-100 mb-1'
                >
                  Email
                </label>
                <Input
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className='bg-pizza-600/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400'
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-pizza-100 mb-1'
                >
                  Téléphone
                </label>
                <Input
                  id='phone'
                  type='tel'
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className='bg-pizza-600/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-pizza-100 mb-1'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className='min-h-[150px] bg-pizza-600/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-[#7F9651] hover:bg-[#7F9651]/80 text-white'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                <Send className='ml-2 h-4 w-4' />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

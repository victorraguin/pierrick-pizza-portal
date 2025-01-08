/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    paypal?: any // Pour éviter les erreurs TypeScript si vous en utilisez
  }
}

// PayPalSubscribeButton.tsx
import React, { useEffect, useRef } from 'react'

interface PayPalSubscribeButtonProps {
  onSubscriptionResult?: (
    success: boolean,
    subscriptionID?: string,
    errorMessage?: string
  ) => void
}

const PayPalSubscribeButton: React.FC<PayPalSubscribeButtonProps> = ({
  onSubscriptionResult
}) => {
  const paypalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existingScript = document.getElementById('paypal-script')
    if (!existingScript) {
      const script = document.createElement('script')
      script.id = 'paypal-script'
      script.src =
        'https://www.paypal.com/sdk/js?client-id=AYRwBFYwRerGPBe7u2Q5JyJ9P-ZXp9sgJMochjbhkyUMWXrauBDeA4tqcf2vYv8wL5odQz67H98yYm8p&vault=true&intent=subscription'
      script.async = true

      script.onload = () => {
        if (window.paypal && paypalRef.current) {
          window.paypal
            .Buttons({
              style: {
                shape: 'pill',
                color: 'blue',
                layout: 'vertical',
                label: 'subscribe'
              },
              createSubscription: (data: any, actions: any) => {
                return actions.subscription.create({
                  plan_id: 'P-56J750674P8051443M56TZQQ'
                })
              },
              onApprove: async (data: any, actions: any) => {
                // Succès : on a data.subscriptionID
                // On tente d'envoyer au serveur :
                try {
                  const response = await fetch(
                    'http://localhost:4000/api/send-subscription-id',
                    {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        subscriptionID: data.subscriptionID
                      })
                    }
                  )
                  if (!response.ok) {
                    // Erreur lors de l'envoi au backend
                    const msg = await response.text()
                    console.error('Erreur envoi subscription ID:', msg)
                    onSubscriptionResult?.(false, undefined, msg)
                  } else {
                    // Tout est OK
                    onSubscriptionResult?.(true, data.subscriptionID)
                  }
                } catch (err) {
                  console.error('Erreur fetch /api/send-subscription-id :', err)
                  onSubscriptionResult?.(
                    false,
                    undefined,
                    (err as Error).message
                  )
                }
              },
              onError: (err: any) => {
                // Callback d'erreur PayPal
                console.error('PayPal onError:', err)
                onSubscriptionResult?.(false, undefined, String(err))
              }
            })
            .render(paypalRef.current)
        }
      }

      document.body.appendChild(script)
    } else {
      // Script déjà présent
      if (window.paypal && paypalRef.current) {
        window.paypal
          .Buttons({
            style: {
              shape: 'pill',
              color: 'blue',
              layout: 'vertical',
              label: 'subscribe'
            },
            createSubscription: (data: any, actions: any) => {
              return actions.subscription.create({
                plan_id: 'P-56J750674P8051443M56TZQQ'
              })
            },
            onApprove: (data: any, actions: any) => {
              // Idem
              onSubscriptionResult?.(true, data.subscriptionID)
            },
            onError: (err: any) => {
              onSubscriptionResult?.(false, undefined, String(err))
            }
          })
          .render(paypalRef.current)
      }
    }
  }, [onSubscriptionResult])

  return <div ref={paypalRef} />
}

export default PayPalSubscribeButton

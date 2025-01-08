import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Contact from './pages/Contact'
import CheckOut from './pages/CheckOut'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main className='flex-grow pt-16'>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/contact' element={<Contact />} />
              {/* <Route path='/mentions-legales' element={<MentionsLegales />} /> */}
              <Route path='/offre' element={<CheckOut />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App

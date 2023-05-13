import ClientOnly from './components/ClientOnly'
import Header from './components/Header'
import RecentOrders from './components/RecentOrders'
import Sidebar from './components/Sidebar'
import TopCards from './components/TopCards'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Dashboard',
  description: 'NextJS Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ClientOnly>
       <Sidebar>
       <Navbar />
       <div className='pb-15 pt-20'>
        {children}
       </div>

       </Sidebar>
       </ClientOnly>
        </body>
    </html>
  )
}

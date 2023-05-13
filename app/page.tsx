import Image from 'next/image'
import ClientOnly from './components/ClientOnly'
import Header from './components/Header'
import TopCards from './components/dashboard/TopCards'
import BarChart from './components/dashboard/BarChart'
import RecentOrders from './components/dashboard/RecentOrders'

export default function Home() {
  return (
   <ClientOnly>
    <main className='bg-gray-100 min-h-screen'>
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-3 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
        </main>
   </ClientOnly>
  )
}

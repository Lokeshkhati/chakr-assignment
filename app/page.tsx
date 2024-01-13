'use client'
import MenuIcon from '@/components/icons/MenuIcon'
import BudgetList from '@/components/ui/BudgetList'
import DataTable from '@/components/ui/DataTable'
import Filters from '@/components/ui/Filters'
import Header from '@/components/ui/Header'
import MobileNav from '@/components/ui/MobileNav'
import Sidebar from '@/components/ui/Sidebar'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <main className='w-full ' >
      <div className=' lg:hidden' onClick={() => setOpen(true)}>
        <MenuIcon />
      </div>
      {open ? <MobileNav closeMenu={closeMenu} /> : null}
      <div className='sm:flex '>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <div className='sm:flex-1'>
          <Header />
          <Filters />
          <BudgetList />
          <DataTable />
        </div>
      </div>
    </main >
  )
}

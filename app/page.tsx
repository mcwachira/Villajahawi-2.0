import { ThemeToggle } from '@/components/theme-toggle'
import React from 'react'

const Home = () => {
  return (
<section className="py-24">
  <div className="container">
    <h1 className="text-3xl font-bold">
      Next ts shandcn ui Template
    </h1>
  </div>
  <ThemeToggle/>
</section>
  )
}

export default Home
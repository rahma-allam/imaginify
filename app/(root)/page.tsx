
import { connectToDatabase } from '@/lib/database/mongoose'
import React from 'react'

const Home = () => {
  connectToDatabase()
  
  return (
    <div>
    </div>
  )
}

export default Home
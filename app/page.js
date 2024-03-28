import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl mb-8 font-bold'>Next Js Project</h1>
      <Link href='/counter' className='btn btn-accent'>
        get started
      </Link>
    </div>
  )
}

export default HomePage

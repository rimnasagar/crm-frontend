import React, { useLayoutEffect } from 'react'
import Header from './partials/header.comp'
import Footer from './partials/footer.comp'

const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header mb-2'>
        <Header/>
        </header>
        <main className='main-content'>
        {children}
        </main>
        <footer className='footer'>
        <Footer />
        </footer>
  </div>
    
  )
}

export default DefaultLayout
import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminNav from '../../admin/adminNav/AdminNav'
import Routers from '../../routers/Routers'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import InfoNav from '../infoNav/InfoNav'

const Layout = () => {
    const location = useLocation()
    return (
        <>
            <InfoNav />
            {
                location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />
            }

            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout

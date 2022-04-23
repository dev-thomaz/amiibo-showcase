
   
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Footer, Header} from '../components'
import Home from '../pages/Home/Home'

const AppRoutes = () => (
    <>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
     <Footer />
   </>
)


export default AppRoutes;
import React from 'react'
import Layout from './Layout'
import Information from './Information'
import {Route,Routes} from 'react-router-dom'
export default function AppRoutes() {
  return (
      <>
          <Layout />
          <Routes><Route path='/info' element={<Information/>}></Route>
        </Routes>
            
    </>
  )
}

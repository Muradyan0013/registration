import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/Home/Home'
import { SignUp } from '../pages/SignUp/SignUp'
import { LogIn } from '../pages/LogIn/LogIn'
import { Profile } from '../pages/Profile/Profile'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<LogIn />} />
            <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
    </div>
  )
}

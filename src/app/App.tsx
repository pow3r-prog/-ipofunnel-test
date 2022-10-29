import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { WELCOME_ROOT, ORDERS_ROOT, SHOP_ROOT, USERS_ROOT } from 'config/paths'

import Navigation from 'containers/Navigation/Navigation'

import Orders from 'containers/Orders/Orders'
import Shop from 'containers/Shop/Shop'
import Users from 'containers/Users/Users'
import Welcome from 'containers/Welcome/Welcome'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path={WELCOME_ROOT} element={<Welcome />} />
          <Route path={ORDERS_ROOT} element={<Orders />} />
          <Route path={SHOP_ROOT} element={<Shop />} />
          <Route path={USERS_ROOT} element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

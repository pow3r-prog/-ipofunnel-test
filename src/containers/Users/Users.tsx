import React from 'react'

import './Users.scss'

import { users } from './data'

const Users = (): React.ReactElement => {
  return (
    <div className='inner-container'>
      {users.map((item) => (
        <div className='user--item' key={item.id}>
          <div className='user--item-name'>Name: {item.name}</div>
          <div className='user--item-email'>Email: {item.email}</div>
          <div className='user--item-password'>Password: {item.password}</div>
          <div className='user--item-orders'>Orders: {item.orders}</div>
        </div>
      ))}
    </div>
  )
}

export default Users as React.FC

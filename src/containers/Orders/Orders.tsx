import React from 'react'

import './Orders.scss'

import { orders } from './data'

const Orders = (): React.ReactElement => {
  return (
    <div className='inner-container'>
      {orders.map((order) => (
        <div className='order' key={order.id}>
          <div className='order--user'>Name: {order.user}</div>
          <div className='order--items'>
            {order.items.map((item) => (
              <div key={item.id}>
                <div className='order--items-title'>{item.title}</div>
                <div className='order--items-price'>Price: {item.price}$</div>
                <div
                  className='order--items-color'
                  style={{ backgroundColor: `${item.color}` }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders as React.FC

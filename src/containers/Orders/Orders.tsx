import React, { useState } from 'react'

import ItemPopup from 'components/itemPopup/ItemPopup'

import './Orders.scss'

import { orders } from './data'

type TData = {
  id?: number
  title: string
  price: number
  color: string
}

interface IOrders {
  id?: number
  user: string
  items: TData[]
}

const Orders = (): React.ReactElement => {
  const [isItem, setIsItem] = useState<IOrders[]>(orders)
  const [inputItems, setInputItems] = useState<TData>({
    title: '',
    price: 0,
    color: '',
  })
  const [input, setInput] = useState<IOrders>({
    user: '',
    items: [inputItems],
  })

  const handleChangeItem = (fieldName: string, event: string): void => {
    setInput({
      ...input,
      [fieldName]: event,
    })
    setInputItems({
      ...inputItems,
      [fieldName]: event,
    })
  }

  const addItem = (): void => {
    const items = [
      {
        title: inputItems.title,
        price: inputItems.price,
        color: inputItems.color,
      },
    ]
    const newItem = {
      id: isItem.length + 1,
      user: input.user,
      items: items,
    }
    setInputItems({
      title: '',
      price: 0,
      color: '',
    })
    setInput({
      user: '',
      items: [inputItems],
    })
    setIsItem([...isItem, newItem])
  }

  const updateItem = (idx: number | undefined): void => {
    const items = [
      {
        id: inputItems.id,
        title: inputItems.title,
        price: inputItems.price,
        color: inputItems.color,
      },
    ]
    const updateState = isItem.map((item) => {
      if (item.id === idx) {
        return {
          ...item,
          user: input.user,
          items: items,
        }
      }
      return item
    })
    setInputItems({
      title: '',
      price: 0,
      color: '',
    })
    setInput({
      user: '',
      items: [inputItems],
    })
    setIsItem(updateState)
  }

  return (
    <div className='inner-container'>
      {isItem.map((order) => (
        <div className='order' key={order.id}>
          <ItemPopup
            type='edit'
            children={
              <>
                <input
                  type='text'
                  placeholder='User'
                  value={input.user}
                  onChange={(e) => handleChangeItem('user', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Title'
                  value={inputItems.title}
                  onChange={(e) => handleChangeItem('title', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Price'
                  value={inputItems.price}
                  onChange={(e) => handleChangeItem('price', e.target.value)}
                />
                For color use #color
                <input
                  type='text'
                  placeholder='Color'
                  value={inputItems.color}
                  onChange={(e) => handleChangeItem('color', e.target.value)}
                />
              </>
            }
            isUpdated={() => updateItem(order.id)}
          />
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
      <ItemPopup
        type='add'
        children={
          <>
            <input
              type='text'
              placeholder='User'
              value={input.user}
              onChange={(e) => handleChangeItem('user', e.target.value)}
            />
            <input
              type='text'
              placeholder='Title'
              value={inputItems.title}
              onChange={(e) => handleChangeItem('title', e.target.value)}
            />
            <input
              type='text'
              placeholder='Price'
              value={inputItems.price}
              onChange={(e) => handleChangeItem('price', e.target.value)}
            />
            For color use #color
            <input
              type='text'
              placeholder='Color'
              value={inputItems.color}
              onChange={(e) => handleChangeItem('color', e.target.value)}
            />
          </>
        }
        isUpdated={addItem}
      />
    </div>
  )
}

export default Orders as React.FC

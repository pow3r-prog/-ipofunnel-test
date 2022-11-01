import React, { useState } from 'react'

import ItemPopup from 'components/itemPopup/ItemPopup'

import './Users.scss'

import { users } from './data'

type TUser = {
  id?: number
  name: string
  email: string
  password: string
  orders: number
}

const Users = (): React.ReactElement => {
  const [isItem, setIsItem] = useState<TUser[]>(users)
  const [input, setInput] = useState<TUser>({
    name: '',
    email: '',
    password: '',
    orders: 0,
  })

  const handleChangeItem = (fieldName: string, event: string): void => {
    setInput({
      ...input,
      [fieldName]: event,
    })
  }

  const addItem = (): void => {
    const newItem = {
      id: isItem.length + 1,
      name: input.name,
      email: input.email,
      password: input.password,
      orders: input.orders,
    }
    if (input.name !== '') {
      setInput({ name: '', email: '', password: '', orders: 0 })
      setIsItem([...isItem, newItem])
    } else {
      alert('Name must not be empty!')
    }
  }

  const updateItem = (idx: number | undefined): void => {
    const updateState = isItem.map((item) => {
      if (item.id === idx) {
        return {
          ...item,
          name: input.name,
          email: input.email,
          password: input.password,
          orders: input.orders,
        }
      }
      return item
    })
    setInput({ name: '', email: '', password: '', orders: 0 })
    setIsItem(updateState)
  }

  return (
    <div className='inner-container'>
      {isItem.map((item) => (
        <div className='user--item' key={item.id}>
          <ItemPopup
            type='edit'
            children={
              <>
                <input
                  type='text'
                  placeholder='Name'
                  value={input.name}
                  onChange={(e) => handleChangeItem('name', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='email'
                  value={input.email}
                  onChange={(e) => handleChangeItem('email', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Password'
                  value={input.password}
                  onChange={(e) => handleChangeItem('password', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Orders'
                  value={input.orders}
                  onChange={(e) => handleChangeItem('orders', e.target.value)}
                />
              </>
            }
            isUpdated={() => updateItem(item.id)}
          />
          <div className='user--item-name'>Name: {item.name}</div>
          <div className='user--item-email'>Email: {item.email}</div>
          <div className='user--item-password'>Password: {item.password}</div>
          <div className='user--item-orders'>Orders: {item.orders}</div>
        </div>
      ))}
      <ItemPopup
        type='add'
        children={
          <>
            <input
              type='text'
              placeholder='Name'
              value={input.name}
              onChange={(e) => handleChangeItem('name', e.target.value)}
            />
            <input
              type='text'
              placeholder='Email'
              value={input.email}
              onChange={(e) => handleChangeItem('email', e.target.value)}
            />
            <input
              type='text'
              placeholder='Password'
              value={input.password}
              onChange={(e) => handleChangeItem('password', e.target.value)}
            />
            <input
              type='text'
              placeholder='Orders'
              value={input.orders}
              onChange={(e) => handleChangeItem('orders', e.target.value)}
            />
          </>
        }
        isUpdated={addItem}
      />
    </div>
  )
}

export default Users as React.FC

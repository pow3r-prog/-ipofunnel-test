import React, { useState } from 'react'

import ItemPopup from 'components/itemPopup/ItemPopup'

import './Shop.scss'

import { shop } from './data'

type TShop = {
  id?: number
  title: string
  count: number
  price: number
  color: string
}

const Shop = (): React.ReactElement => {
  const [isItem, setIsItem] = useState<TShop[]>(shop)
  const [input, setInput] = useState<TShop>({
    title: '',
    count: 0,
    price: 0,
    color: '',
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
      title: input.title,
      count: input.count,
      price: input.price,
      color: input.color,
    }
    if (input.title !== '') {
      setInput({ title: '', count: 0, price: 0, color: '' })
      setIsItem([...isItem, newItem])
    } else {
      alert('Title must not be empty!')
    }
  }

  const updateItem = (idx: number | undefined): void => {
    const updateState = isItem.map((item) => {
      if (item.id === idx) {
        return {
          ...item,
          title: input.title,
          count: input.count,
          price: input.price,
          color: input.color,
        }
      }
      return item
    })
    setInput({ title: '', count: 0, price: 0, color: '' })
    setIsItem(updateState)
  }

  return (
    <div className='inner-container'>
      {isItem.map((item) => (
        <div className='shop--item' key={item.id}>
          <ItemPopup
            type='edit'
            children={
              <>
                <input
                  type='text'
                  placeholder='Title'
                  value={input.title}
                  onChange={(e) => handleChangeItem('title', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Count'
                  value={input.count}
                  onChange={(e) => handleChangeItem('count', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Price'
                  value={input.price}
                  onChange={(e) => handleChangeItem('price', e.target.value)}
                />
                For color use #color
                <input
                  type='text'
                  placeholder='Color'
                  value={input.color}
                  onChange={(e) => handleChangeItem('color', e.target.value)}
                />
              </>
            }
            isUpdated={() => updateItem(item.id)}
          />
          <div className='shop--item-title'>{item.title}</div>
          <div className='shop--item-count'>{item.count} items</div>
          <div className='shop--item-price'>Price: {item.price}$</div>
          <div
            className='shop--item-color'
            style={{ backgroundColor: `${item.color}` }}
          />
        </div>
      ))}
      <ItemPopup
        type='add'
        children={
          <>
            <input
              type='text'
              placeholder='Title'
              value={input.title}
              onChange={(e) => handleChangeItem('title', e.target.value)}
            />
            <input
              type='text'
              placeholder='Count'
              value={input.count}
              onChange={(e) => handleChangeItem('count', e.target.value)}
            />
            <input
              type='text'
              placeholder='Price'
              value={input.price}
              onChange={(e) => handleChangeItem('price', e.target.value)}
            />
            For color use #color
            <input
              type='text'
              placeholder='Color'
              value={input.color}
              onChange={(e) => handleChangeItem('color', e.target.value)}
            />
          </>
        }
        isUpdated={addItem}
      />
    </div>
  )
}

export default Shop as React.FC

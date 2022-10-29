import React, { useEffect, useRef, useState } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false)
  const [isItem, setIsItem] = useState<TShop[]>(shop)
  const [input, setInput] = useState<TShop>({
    title: '',
    count: 0,
    price: 0,
    color: '',
  })

  useEffect(() => {
    // TODO
    const checkIfClickedOutside = (e: any) => {
      if (isPopupOpen && ref.current && !ref?.current?.contains(e.target)) {
        setPopupOpen(false)
        document.body.style.overflowY = 'scroll'
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isPopupOpen])

  const handleChange = (event: string, fieldName: string): void => {
    setInput({
      ...input,
      [fieldName]: event,
    })
  }

  const addItem = (): void => {
    const newTask = {
      id: isItem.length + 1,
      title: input.title,
      count: input.count,
      price: input.price,
      color: input.color,
    }
    if (input.title !== '' && input.price !== 0) {
      setInput({ title: '', count: 0, price: 0, color: '' })
      setIsItem([...isItem, newTask])
    } else {
      alert('Title must not be empty!')
    }
  }

  return (
    <div className='inner-container'>
      {isItem.map((item) => (
        <div className='shop--item' key={item.id}>
          <div className='shop--item-title'>{item.title}</div>
          <div className='shop--item-count'>{item.count} items</div>
          <div className='shop--item-price'>Price: {item.price}$</div>
          <div
            className='shop--item-color'
            style={{ backgroundColor: `${item.color}` }}
          />
        </div>
      ))}
      <div
        className='add--item-button'
        onClick={() => {
          setPopupOpen(!isPopupOpen)
          document.body.style.overflowY = 'hidden'
        }}
      >
        +
      </div>
      {isPopupOpen && (
        <div className='item--popup' ref={ref}>
          <input
            type='text'
            placeholder='Title'
            value={input.title}
            onChange={(e) => handleChange(e.target.value, 'title')}
          ></input>
          <input
            type='text'
            placeholder='Count'
            value={input.count}
            onChange={(e) => handleChange(e.target.value, 'count')}
          ></input>
          <input
            type='text'
            placeholder='Price'
            value={input.price}
            onChange={(e) => handleChange(e.target.value, 'price')}
          ></input>
          <input
            type='text'
            placeholder='Color'
            value={input.color}
            onChange={(e) => handleChange(e.target.value, 'color')}
          ></input>
          <button
            onClick={() => {
              setPopupOpen(!isPopupOpen)
              document.body.style.overflowY = 'hidden'
              addItem()
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  )
}

export default Shop as React.FC

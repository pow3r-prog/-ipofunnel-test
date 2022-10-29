import React, { useEffect, useRef, useState } from 'react'

import './Shop.scss'

type TData = {
  title: string
  count: number
  price: number
  color: string
}

const AddItem = ({ title, count, price, color }: TData): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null)
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false)

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

  return (
    <div className='add--item'>
      <div className='add--item-button'>+</div>
      {isPopupOpen && (
        <div className='item--popup' ref={ref}>
          <input>{title}</input>
          <input>{count}</input>
          <input>{price}</input>
          <input>{color}</input>
        </div>
      )}
    </div>
  )
}

export default AddItem

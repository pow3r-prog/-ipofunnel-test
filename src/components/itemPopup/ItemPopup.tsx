import React, { useEffect, useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

import './ItemPopup.scss'

interface IPopup {
  children: React.ReactNode
  isUpdated: () => void
  type: 'edit' | 'add'
}

const ItemPopup = ({
  children,
  isUpdated,
  type,
}: IPopup): React.ReactElement => {
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
    <div className='popup'>
      <div
        className='popup--icons'
        onClick={() => {
          setPopupOpen(!isPopupOpen)
          document.body.style.overflowY = 'hidden'
        }}
      >
        {type === 'add' ? (
          <FontAwesomeIcon
            icon={faPlus}
            size='2x'
            color='white'
            className='add-icon'
            cursor='pointer'
          />
        ) : (
          <FontAwesomeIcon
            icon={faPen}
            size='1x'
            color='green'
            className='edit-icon'
            cursor='pointer'
          />
        )}
      </div>

      {isPopupOpen && (
        <div className='popup--container'>
          <div className='popup--container-item' ref={ref}>
            <FontAwesomeIcon
              icon={faXmark}
              size='2x'
              color='red'
              className='close-icon'
              cursor='pointer'
              onClick={() => {
                setPopupOpen(!isPopupOpen)
                document.body.style.overflowY = 'hidden'
              }}
            />

            {children}

            <button
              onClick={() => {
                setPopupOpen(!isPopupOpen)
                document.body.style.overflowY = 'hidden'
                isUpdated()
              }}
            >
              {type === 'add' ? 'Add' : 'Update'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemPopup

import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { data } from './data'

import './Navigation.scss'

const Navigation = (): React.ReactElement => {
  let location = useLocation()

  const pathname = location.pathname

  const activeNavBtnByPath = (item: { path: string }) => {
    if (item) {
      return pathname.includes(item.path)
    }
    return item
  }

  return (
    <div className='nav'>
      <div className='nav--list'>
        {data.map((item) => (
          <NavLink
            key={item.key}
            className={
              activeNavBtnByPath(item)
                ? 'nav--list-item active'
                : 'nav--list-item'
            }
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Navigation as React.FC

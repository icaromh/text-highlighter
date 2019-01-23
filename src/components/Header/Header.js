import React from 'react'

const Header = ({ title, children }) => (
  <div className="Header">
    <h1 className="Header__title">{title}</h1>
    {children}
  </div>
)

export default Header

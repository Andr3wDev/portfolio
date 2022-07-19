import React from 'react'

const Skill = ({src, title}) => {
  return (
    <div className="item">
        <img src={src} alt={title}/>
        <span>{title}</span>
    </div>
  )
}

export default Skill
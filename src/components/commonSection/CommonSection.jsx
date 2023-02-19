import React from 'react'
import hero from '../../assets/img/common.jpg'

const CommonSection = ({title}) => {
  return (
    <div style={{
        width: '100%',
        height: '350px',
        background: `linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)), url(${hero}) no-repeat center top`,
        backgroundSize: 'cover',
        overflow: 'hidden',
    }}>
        <h2 style={{
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
            fontSize: '2.5rem',
            marginTop: '12%',
        }}>{title}</h2>
    </div>
  )
}

export default CommonSection

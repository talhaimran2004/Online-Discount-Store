import React from 'react'

const Slide = ({img, alt}) => {
  return (
    <div style={{
      minWidth: '97vw',
      maxWidth: '97vw',
      minHeight: '480px',
      maxHeight: '480px',
      borderRadius: '25px',
      // padding: '0 4px',
      objectFit: 'cover',
      objectPosition: 'bottom',
      overflow: 'hidden',
      boxSizing: 'border-box',
      margin: '0 0.9%'
      }}>
      <img src={img} alt={alt}/>
    </div>
  )
}

export default Slide

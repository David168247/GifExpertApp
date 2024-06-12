import React from 'react'

export const GifItem = ({ id , title ,url }) => {
  return (
    <div className='card'>
        
        <img 
        src={url}
        alt={title}
        style={{
          width:200,
          height:200
        }}
         />
        <p key={id}>{ title }</p>
    </div>
  )
}

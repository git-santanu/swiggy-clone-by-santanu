import React from 'react'

const index = ({cardName,image}) => {
  return (
    <>
        <div className='card-wrap'>
        <img 
         className='card-img'
         src={image}
         alt='abc'/>
            <h3>{cardName}</h3>
            <h5>Desserts, Ice Cream</h5>
            <div className='card-bottom'>
                <h6>4.5 stars</h6>
                <h6>37 mins</h6>
                <h6>300/- for two</h6>
            </div>
        </div>
    </>
  )
}

export default index
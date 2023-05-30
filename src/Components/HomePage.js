import React from 'react'
import '../styles/Homepage.css'

function HomePage({imageData}) {
  return (
    <div className='grid'>
        {
            imageData.map((obj,idx)=>{
                return(
                    <div className='grid-item'>
                        <img src = {obj.urls.regular} width={"100%"} height={"100%"} alt='image' />
                    </div>
                )
            })
        }
    </div>
  )
}

export default HomePage
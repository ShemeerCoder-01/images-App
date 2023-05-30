import React from 'react'
import '../styles/Homepage.css'

function keygenerator(){
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let res = '';
    for (let i = 0; i < 7; i++) {
      res += str.charAt(Math.random() * 5);
    }
    return res;
}

function HomePage({imageData}) {
  return (
    <div className='grid'>
        {
            imageData.map((obj,idx)=>{
                return(
                    <div key={keygenerator()} className='grid-item'>
                        <img src = {obj.urls.regular} width={"100%"} height={"100%"} alt={obj.alt_description} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default HomePage
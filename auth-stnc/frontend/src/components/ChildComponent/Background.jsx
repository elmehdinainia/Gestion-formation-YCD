import React from 'react'
import image from '../../../src/public/formation-gestion-stress-en-entreprise-7.jpeg'


export default function Background(){
    return(
        <div 
        className=' lg:flex  h-full w-1/2 items-center justify-center relative' style={{backgroundImage: `url(${image})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >
        </div>
    )
    
}
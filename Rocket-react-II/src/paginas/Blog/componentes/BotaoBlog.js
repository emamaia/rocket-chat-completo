import React from 'react'

import '../style.css'

function BotaoBlog(props) {

   const handleClick=(ev)=>{
        ev.preventDefault()
        props.handleMudaPostagem()       
    }

    return (
        <button
            onClick={handleClick}
            className=' botaoBlog'
        >
            {props.children}
    </button>
    )
}


export default BotaoBlog
import React from 'react'
import { tsPropertySignature } from '@babel/types'

import '../style.css'

function Postagem(props) {
    return (
        <div className='postagem'>
            <h2>{props.postagem.title}</h2>
            <p>{props.postagem.body}</p>
            {/* <button className='botao'>Saiba Mais</button> */}
        </div>
    )
}


export default Postagem
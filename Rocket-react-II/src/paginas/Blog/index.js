import React from 'react'
import { getPostagens } from '../../service/postagens'
import Header from '../../componentes/Header'
import Postagem from './componentes/Postagem'
import BotaoBlog from './componentes/BotaoBlog'

import astro from '../../imagens/astro.jpg'

import './style.css'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postagens: [],
            postagemAtual: ""
        }
    }

    componentDidMount() {
        getPostagens()
            .then(response => {
                this.setState({
                  postagens: response.data,
                  postagemAtual: response.data[0],
                  index: 0
                })           

            })
            .catch(error => {
                console.error(error)
            })
    }

    handleMudaPostagem = () => {
        let mudaIndex = this.state.index + 1
        this.setState({
            postagemAtual: this.state.postagens[mudaIndex],
            index: mudaIndex
        })
    }

    handleVoltaPostagem= () => {
        let mudaIndex = this.state.index - 1
        this.setState({
            postagemAtual: this.state.postagens[mudaIndex],
            index: mudaIndex
        })
    }


    render() {
        return (
            <section>
                <Header
                    classeHeader='blog-header'
                    texto='Blog'
                />

                {this.state.postagemAtual 
                    ? <Postagem postagem={this.state.postagemAtual} />
                    : <span>Carregando mensagens :D</span>
                }

                <div className='divBotao'>

                <BotaoBlog 
                handleMudaPostagem={this.handleMudaPostagem}
                >
                    Próxima >>
                </BotaoBlog>

                <BotaoBlog 
                handleMudaPostagem={this.handleVoltaPostagem}
                >
                    Voltar
                </BotaoBlog>
                </div>

            </section>
        )
    }
}




export default Blog
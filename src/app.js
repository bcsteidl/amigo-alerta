'use strict'

import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import Alerta from '..'

class app extends Component {
    mostraNormal = () => {
        this.alerta.setValor({
            tipo: "Normal",
            cabecalho: "[Normal]: 100",
            mensagem: "Esta mensagem é um teste para mensagens do tipo [Normal]",
            ok: () => {
                console.log("EXECUTOU NORMAL!")
            }
        })
    }

    mostraAviso = () => {
        this.alerta.setValor({
            tipo: "Aviso",
            cabecalho: "[Aviso]: 100",
            mensagem: "Esta mensagem é um teste para mensagens do tipo [Aviso]",
            ok: () => {
                console.log("EXECUTOU AVISO!")
            },
            cancelar: () => {
                console.log("CANCELOU EXECUÇÃO AVISO!")
            }
        })
    }

    mostraErro = () => {
        document.alerta.setValor({
            tipo: "Erro",
            cabecalho: "[Erro]: 100",
            mensagem: "Esta mensagem é um teste para mensagens do tipo [Erro]",
            ok: () => {
                console.log("CANCELOU EXECUÇÃO ERRO!")
            }
        })
    }

    render() {
        return (
            <div>
                <Alerta id="alerta" nome="alerta"/>
                <Button onClick={this.mostraNormal}>Alerta Normal</Button>
                <Button onClick={this.mostraAviso}>Alerta Aviso</Button>
                <Button onClick={this.mostraErro}>Alerta Erro</Button>
            </div>
        )
    }
}

export default app

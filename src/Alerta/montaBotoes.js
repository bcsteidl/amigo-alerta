'use strict'

import React, {Component} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

export default(comp) => {
    // Define a cor do botão OK conforme o tipo de aviso
    const bsStyle = ((comp.state.tipo == "Normal")
        ? "info"
        : ((comp.state.tipo == "Aviso")
            ? "warning"
            : "danger"))

    // Mostra botão de OK em todos os tipos de mensagens
    const botaoOk = <Button bsStyle={bsStyle} onClick={comp.ok}>OK</Button>

    // Mostra botão de cancelamento somente para mensagens de aviso
    let botaoCancelar = null
    if (comp.state.tipo == "Aviso") {
        botaoCancelar = <Button bsStyle="success" onClick={comp.cancelar}>Cancelar</Button>
    } else {
        botaoCancelar = <div/>
    }

    return (
        <ButtonToolbar bsClass="text-center">
            {botaoOk}
            {botaoCancelar}
        </ButtonToolbar>
    )
}

'use strict'

import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import montaBotoes from './montaBotoes'

export default(comp) => {
    let renderiza = null
    if (comp.state.show) {
        // Monta os botões do rodapé
        const painelBotoes = montaBotoes(comp)

        // Renderiza o componente final
        renderiza = (
            <Modal className="t-modal" show={comp.state.show}>
                <Modal.Header closeButton>
                    <b>{comp.state.cabecalho}</b>
                </Modal.Header>
                <Modal.Body>
                    <div contentEditable='false' dangerouslySetInnerHTML={{
                        __html: comp.state.mensagem
                    }}></div>
                </Modal.Body>
                <Modal.Footer>
                    {painelBotoes}
                </Modal.Footer>
            </Modal>
        )
    } else {
        renderiza = (<div/>)
    }

    return renderiza
}

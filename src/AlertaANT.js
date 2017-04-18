'use strict'

import '../css/amigo-alerta.min.css'
import '../css/amigo-alerta-theme.min.css'

import React from 'react'
import {Alert, ButtonToolbar, Button} from 'react-bootstrap'

const app = React.createClass({
    getInitialState() {
        return {alertVisible: true};
    },

    render() {
        if (this.state.alertVisible) {
            // Define estilos dos botões
            const ButtonStyles = {
                margin: "10px 0px 0px 15px"
            };

            // Define a cor do botão OK conforme o tipo de aviso
            let bsStyle = ((this.props.tipo == "Normal")
                ? "info"
                : ((this.props.tipo == "Aviso")
                    ? "warning"
                    : "danger"))

            // Mostra botão de OK em todos os tipos de mensagens
            let botaoOk = <Button bsStyle={bsStyle} style={ButtonStyles} onClick={this.ok}>OK</Button>

            // Mostra botão de cancelamento somente para mensagens de aviso
            let botaoCancelar = null
            if (this.props.tipo == "Aviso") {
                botaoCancelar = <Button bsStyle="success" style={ButtonStyles} onClick={this.cancelar}>Cancelar</Button>
            } else {
                botaoCancelar = <div/>
            }

            // Renderiza o componente final
            return (
                <Alert bsStyle={bsStyle} onDismiss={this.cancelar}>
                    <h4>
                        <b>{this.props.cabecalho}</b>
                    </h4>
                    <div>{this.props.mensagem}</div>
                    <ButtonToolbar bsClass="text-center">
                        {botaoOk}
                        {botaoCancelar}
                    </ButtonToolbar>
                </Alert>
            );
        }

        return (<div/>);
    },

    ok() {
        this.props.ok()
        this.setState({alertVisible: false});
    },

    cancelar() {
        this.props.cancelar()
        this.setState({alertVisible: false});
    }
});

// Seta os valores iniciais das propriedades
app.defaultProps = {
    tipo: "Normal", // Tipos: [Normal], [Aviso] e [Erro]
    cabecalho: "",
    mensagem: "",
    ok: () => {},
    cancelar: () => {}
}

export default app

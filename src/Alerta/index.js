'use strict'

import React, {Component} from 'react'
import referencias from './referencias'
import propriedades from './propriedades'
import estados from './estados'
import montaRender from './montaRender'

class componente extends Component {
    componentDidMount() {
        // Cria uma referencia do componente pai para este componente e deste componente no componente pai
        referencias(this)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (!(JSON.stringify(this.props) == JSON.stringify(nextProps)) || !(JSON.stringify(this.state) == JSON.stringify(nextState)) || !(JSON.stringify(this.context) == JSON.stringify(nextContext)))
    }

    // Definição dos valores default das propriedades do componente
    static defaultProps = propriedades

    // Definição do state inicial do componente
    state = estados(this)

    // Executa ações da propriedade OK
    ok = () => {
        this.state.ok()
        this.setState({show: false});
    }

    // Executa ações da propriedade Cancelar
    cancelar = () => {
        this.state.cancelar()
        this.setState({show: false});
    }

    // Seta o valor e mostrar formatado no campo
    setValor = (json) => {
        this.setState({
            tipo: json.tipo,
            cabecalho: json.cabecalho,
            mensagem: json.mensagem,
            ok: (json.ok
                ? json.ok
                : this.props.ok),
            cancelar: (json.cancelar
                ? json.cancelar
                : this.props.cancelar),
            show: true
        })
    }

    render() {
        return montaRender(this)
    }
}

export default componente

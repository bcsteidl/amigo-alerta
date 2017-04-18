'use strict'

export default (comp) => {
    return {
        tipo: comp.props.tipo,
        cabecalho: comp.props.cabecalho,
        mensagem: comp.props.mensagem,
        ok: comp.props.ok,
        cancelar: comp.props.cancelar,
        show: false
    }
}

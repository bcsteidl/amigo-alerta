'use strict'

export default (comp) => {
    // Cria uma referencia a instancia do componente pai
    comp.parent = comp._reactInternalInstance._currentElement._owner._instance

    // Cria a referencia deste componente no componente pai
    if (comp.props.nome && comp.props.nome != "") {
        comp.parent[comp.props.nome] = comp
        document[comp.props.nome] = comp
    }
}

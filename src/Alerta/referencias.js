'use strict'

import global from 'global'

export default (comp) => {
    // Cria uma referencia a instancia do componente pai
    comp.parent = comp._reactInternalInstance._currentElement._owner._instance

    // Cria a referencia deste componente no componente pai
    global.alerta = comp
}

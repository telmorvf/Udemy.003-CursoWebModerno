import React from 'react'
import ReactDOM from 'react-dom'

import  Multiplos, { BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multiplos.BoaTarde nome="Ana"/>
        <BoaNoite nome='Bia'/>
    </div>
, document.getElementById('root'))


 
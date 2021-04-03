import React from 'react'

import Navigation   from '../Navigation/Navigation'
import Carusel      from '../Carusel/Carusel'
import Counter      from '../Counter/Counter'
import Random      from '../Random/Random'
import './style.css'

export default () => {
    
    return (
        <div>
            <Navigation />
            <Carusel />
            <Counter />
            <Random />
        </div>
    )
}
import React, { useState } from 'react'

import {Button, InputGroup} from 'react-bootstrap'
import './style.css'
export default () => {
    const [aleatory, setAleatory] = useState('0000');

    const handleAleatory = () => {
         const numberRandom  = Math.floor(Math.random() * 9999 - 1).toString()
         setAleatory(numberRandom)
    }

    return (
        <div className='mt-2 text-center w-100' id='play'>
            <h5>¿CÓMO JUGAR?</h5>
            <table cellPadding='5' colSpan='2' className='center ml-auto mr-auto mt-2 mb-5'>
                <tbody>
                    <tr>
                        <td><div className='steps'>1</div></td>
                        <td>Escoje cuatro cifras del 1 al 9</td>
                    </tr>
                    <tr>
                        <td><div className='steps'>2</div></td>
                        <td>Apuesta a través de tu Natillera</td>
                    </tr>
                    <tr>
                        <td><div className='steps'>3</div></td>
                        <td>Espera el resultado de la loteria</td>
                    </tr>
                </tbody>
            </table>
            <div className='background-counter p-3'>
                <h5 className='text-white mb-3'>GENERAR NÚMERO ALEATORIO</h5>
                <div className='d-inline-block'>
                    <InputGroup size='sm'>
                        <InputGroup.Text readOnly={true}>{aleatory.charAt(0) === '' ? 0 : aleatory.charAt(0)}</InputGroup.Text>
                        <InputGroup.Text className='ml-1' readOnly={true}>{aleatory.charAt(1) === '' ? 0 : aleatory.charAt(1)}</InputGroup.Text>
                        <InputGroup.Text className='ml-1' readOnly={true}>{aleatory.charAt(2) === '' ? 0 : aleatory.charAt(2)}</InputGroup.Text>
                        <InputGroup.Text className='ml-1' readOnly={true}>{aleatory.charAt(3) === '' ? 0 : aleatory.charAt(3)}</InputGroup.Text>
                    </InputGroup>
                </div>
                <br />
                <Button variant='light' className='text-btn mt-2 pl-4 pr-4' onClick={handleAleatory}>Generar</Button>
            </div>
        </div>
    )
}
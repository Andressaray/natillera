import React, {useRef, useState, useEffect} from 'react'
import {InputGroup} from 'react-bootstrap'
import './style.css'
export default () => {

    const [timeDays, setTimeDays]   = useState('00');
    const [hours, setHours]         = useState('00');
    const [minutes, setMinutes]     = useState('00');
    const [seconds, setSeconds]     = useState('00');

    let interval = useRef()

    const start = () => {
        const countDown = new Date('April 10, 2021 13:00:00').getTime()
        interval = setInterval(() => {
            const now       = new Date().getTime()
            const distance  = countDown - now
            const days      = Math.floor(distance / (1000* 60* 60 *24)).toString()
            const hours     = Math.floor((distance % (1000* 60* 60 *24) / (1000* 60 * 60))).toString()
            const minutes   = Math.floor((distance % (1000* 60* 60)) / (1000 * 60)).toString()
            const seconds   = Math.floor((distance % (1000* 60)) / 1000).toString()

            if(distance < 0){
                alert('Termino todo')
                clearInterval(interval.current)
            }else{
                setTimeDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000)
    }

    useEffect(() => {
        start()
    })

    return (
        <div className='background-counter mt-5 p-2 mb-5'>
            <h5 className='text-white text-center mt-2'>ESTA REPOLLA CIERRA EN :</h5>
            <div className='container-countDown mt-3'>
                <div className='text-center ml-auto mr-auto w-75' id='results'>
                    <table cellPadding='1' className=' ml-auto mr-auto text-center'>
                        <tbody>
                            <tr>
                                <td>
                                    <InputGroup size='sm'>
                                        <InputGroup.Text readOnly={true}>{timeDays.length === 2 ? timeDays.charAt(0): 0}</InputGroup.Text>  
                                        <InputGroup.Text className='ml-1' readOnly={true}>{timeDays.length === 2 ? timeDays.charAt(1): timeDays.charAt(0)}</InputGroup.Text>
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup size='sm' className='ml-1'>
                                        <InputGroup.Text readOnly={true}>{hours.length === 2 ? hours.charAt(0): 0}</InputGroup.Text>
                                        <InputGroup.Text className='ml-1' readOnly={true}>{hours.length === 2 ? hours.charAt(1): hours.charAt(0)}</InputGroup.Text>
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup size='sm' className='ml-1'>
                                        <InputGroup.Text readOnly={true}>{minutes.length === 2 ? minutes.charAt(0): 0}</InputGroup.Text>
                                        <InputGroup.Text className='ml-1' readOnly={true}>{minutes.length === 2 ? minutes.charAt(1): minutes.charAt(0)}</InputGroup.Text>
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup size='sm' className='ml-1'>
                                        <InputGroup.Text readOnly={true}>{seconds.length === 2 ? seconds.charAt(0): 0}</InputGroup.Text>
                                        <InputGroup.Text className='ml-1' readOnly={true}>{seconds.length === 2 ? seconds.charAt(1): seconds.charAt(0)}</InputGroup.Text>
                                    </InputGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <small className='text-white'>Días</small>
                                </td>
                                <td>
                                    <small className='text-white ml-3'>Horas</small>
                                </td>
                                <td>
                                    <small className='text-white ml-3'>Minutos</small>
                                </td>
                                <td>
                                    <small className='text-white ml-3'>Segundos</small> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    {/* <small className='text-white'>Días</small>
                    <InputGroup size='sm' className='ml-4'>
                        <InputGroup.Text readOnly={true}>{hours.length === 2 ? hours.charAt(0): 0}</InputGroup.Text>
                        <InputGroup.Text className='ml-1' readOnly={true}>{hours.length === 2 ? hours.charAt(1): hours.charAt(0)}</InputGroup.Text>
                    </InputGroup>
                    <small className='text-white'>Horas</small>
                    <InputGroup size='sm' className='ml-4'>
                        <InputGroup.Text readOnly={true}>{minutes.length === 2 ? minutes.charAt(0): 0}</InputGroup.Text>
                        <InputGroup.Text className='ml-1' readOnly={true}>{minutes.length === 2 ? minutes.charAt(1): minutes.charAt(0)}</InputGroup.Text>
                    </InputGroup>
                    <small className='text-white'>Minutos</small>
                    <InputGroup size='sm' className='ml-4'>
                        <InputGroup.Text readOnly={true}>{seconds.length === 2 ? seconds.charAt(0): 0}</InputGroup.Text>
                        <InputGroup.Text className='ml-1' readOnly={true}>{seconds.length === 2 ? seconds.charAt(1): seconds.charAt(0)}</InputGroup.Text>
                    </InputGroup>
                    <small className='text-white'>Segundos</small>                 */}
                </div>
            </div>
        </div>
    )
}
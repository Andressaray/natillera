import React from 'react'

import {Carousel} from 'react-bootstrap/'

import repolla1 from '../../images/repolla1.png'
import repolla2 from '../../images/repolla2.png'
import repolla3 from '../../images/repolla3.png'
import './style.css'

export default () => {
    return (
        <div className='mt-4'>
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img src={repolla1} className='d-block w-100' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={repolla3}  className='d-block w-100'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={repolla2} className='d-block w-100' />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
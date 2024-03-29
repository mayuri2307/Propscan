import React from 'react'

import Expert from './expert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./expert.css"
import Carousel from '../../utils/carousel';

export default function Experts() {
    return (
        <>
            <Row>
                <Col xs="12">
                    <p className='top text-center'><span className='f-bold'>Experts</span> Aapke Liye</p>
                </Col>
            </Row>
            <Row className=''>
                <Col xs="1" />
                <Col xs="10">
                    <div className='px-2'>
                        <div className='my-5'>
                            <Row className='m-0 p-0'>
                                <Col className='p-0'>
                                    <Carousel slides={4} responsive={[[1400,3], [1024,2], [780,1]]} items={[
                                        <div className='p-2'>
                                            <Expert
                                                src="images/expert_1.png"
                                                name="Mr. Brijlal Kumar"
                                                convRate="91%"
                                            />
                                        </div>,
                                        <div className='p-2'>
                                            <Expert
                                                src="images/expert_2.png"
                                                name="Mr. Brijlal Kumar"
                                                convRate="91%"
                                                />
                                        </div>,
                                        <div className='p-2'>
                                            <Expert
                                                src="images/expert_3.png"
                                                name="Mr. Brijlal Kumar"
                                                convRate="91%"
                                                />
                                        </div>,
                                        <div className='p-2'>
                                            <Expert
                                                src="images/expert_4.png"
                                                name="Mr. Brijlal Kumar"
                                                convRate="91%"
                                                verified={false}
                                            />
                                        </div>,
                                        <div className='p-2'>
                                        <Expert
                                            src="images/expert_3.png"
                                            name="Mr. Brijlal Kumar"
                                            convRate="91%"
                                        />
                                        </div>
                                    ]} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs="1" />
            </Row>
        </>
    )
}

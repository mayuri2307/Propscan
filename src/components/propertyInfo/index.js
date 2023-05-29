import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import getFontData from '../../utils/getFontData';

import "./propertyInfo.css"

export default function PropertyInfo() {
  return (
    <div>
      <Row className='my-5'>
        <Col xs="1"/>
        <Col>
        <Row>
          <Col xs="6">
          <div className='pb-2'>
            <p style={{marginBottom:"12px", ...getFontData("20px","700")}}>The Cressida - Chetan Garg Real Estate</p>
            <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>2,3 BHK Independent Floor in Dwarka, Delhi</p>
          </div>
            <img src="images/share_filled.svg" className='pe-2' /> 
            <img src="images/heart_filled.svg" /> 
          </Col>
          <Col xs="6">
            <div className='text-end mb-5'>
              <p style={{marginBottom:"16px", ...getFontData("20px","700")}}>Rs 1.00 Cr - 3.10 Cr </p>
              <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Avg. Price</p>
              <p style={getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}>Rs. 55.10 K/sq.mt</p>
              <button className='btn-info float-end'><span className='expert-btn-text px-3'>Contact</span></button>
            </div>
          </Col>
          <Col xs="8" className='mt-3'>
            <img style={{
              width:"100%",
              height: "auto"
            }} src="images/property_1.png" />
          </Col>
          <Col xs="4" className='mt-3'>
            <div className='d-flex flex-column justify-content-between' style={{height:"100%"}}>
              <div>
                <img className='fluid' style={{borderRadius: "8px 0px 0px 8px"}} src="images/property_2.png" />
              </div>
              <div style={{position:"relative"}}>
                <img className='fluid' style={{borderRadius: "8px 0px 0px 8px"}} src="images/property_1.png" />
                <div className='property-img-overlay'></div>
                <span className='property-img-center' style={{
                  ...getFontData("20px", "700", {
                    "color":"#FFFFFF"
                  })
                }}>+10 Photos</span>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <div className='stat property-specs mt-3'>
              <Row className='py-3 px-0'>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Build Up Area</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>1100 Sq.ft</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Age of Property</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>New</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Possession status</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>Ready to move</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Facing</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>East Facing</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Furnishing</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>Semi Furnishing</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Floor</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>1 out of 12 floors</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        </Col>
        <Col xs="1"/>
      </Row>
    </div>
  )
}


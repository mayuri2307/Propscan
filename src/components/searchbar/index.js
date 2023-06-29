import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SelectBox } from '../selectbox';
import getFontData from '../../utils/getFontData';

import "./searchbar.css"

const searchSuggestions = ["Dwarka", "Pitampura", "Greater Kailash", "Defence Colony", "Saket", "Punjabi Bagh", "Lajpat Nagar", "Model Town", "Karol Bagh", "Shahdra"];

export default function Searchbar() {
  const navigate = useNavigate();
  const [squery, setSquery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <div className='searchbar-setter'>
      <Row>
        <Col xs="1" lg="2"></Col>
        <Col xs="10" lg="8" className='p-2'>
          <div className='p-2 searchbar-main' style={{position:"relative"}}>
            <Row>
              <Col xs="4" sm="3" className='text-center my-auto'>
              <SelectBox
                  className="font-medium text-blue_gray_900 text-left text-sm w-[9%] md:w-full"
                  placeholderClassName="text-blue_gray_900"
                  isMulti={false}
                  name="group105"
                  options={[
                    { label: "New Delhi", value: "New Delhi" },
                    { label: "Bangalore", value: "Bangalore" },
                    { label: "Mumbai", value: "Mumbai" },
                  ]}
                  isSearchable={false}
                  placeholder="New Delhi"
              />
                {/* <span className='searchbar-drop'>New Delhi <img src="images/img_arrowdown.svg" style={{paddingBottom:"2px", paddingLeft:"10px"}} /></span> */}
              </Col>
              <Col xs="8" sm="9" style={{borderLeft: "1px solid #0D2855", position:"relative"}} className='my-auto'>
                <div>
                  <input className='searchbar-input' value={squery} onClick={() => setShowSuggestions(true)} onChange={(e) => setSquery(e.target.value)} placeholder='Search for loacality, Landmark, Project or Builder' />
                  <button className='btn-info float-end' onClick={() => navigate("/properties")}><span className='expert-btn-text px-3'>Search</span></button>
                  {showSuggestions && <div className='search-suggestions'>
                    <span  style={{opacity:"0.5", padding:"7px 24px", ...getFontData("12px", "400")}}>POPULAR SEARCH</span>
                    {searchSuggestions.map((item) => (
                      <p onClick={(e) => {
                        setShowSuggestions(false);
                        setSquery(e.target.innerHTML.split(" <")[0]);
                      }}>{item} <span style={{opacity:"0.5", float: "right"}}>LOCALITY</span></p>
                    ))}
                  </div>}
                </div>
                <div className='searchbar-text p-3 d-none d-lg-block'>
                  <br/>
                  <br/>
                  <span className='searchbar-text-bold'>Buy</span>
                  <span>Rent</span>
                  <span>Commercial</span>
                  <span>PG/Co-Living</span>
                  <span>Plots</span>
                </div>
              </Col>
            </Row>
            <div className='searchbar-text p-3 d-block d-lg-none mt-4'>
              <br/>
              <span className='searchbar-text-bold'>Buy</span>
              <span>Rent</span>
              <span>Commercial</span>
              <span>PG/Co-Living</span>
              <span>Plots</span>
            </div>
          </div>
        </Col>
        <Col xs="1" lg="2"></Col>
      </Row>
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

import Loader from '../../components/loader'
import Leaflet from '../../components/leaflet'
import FadeIn from 'react-fade-in';

import api from '../../services/api'

import './styles.css'

export default function Response() {
  const { state } = useLocation();

  return (
    <FadeIn>
      <div style={{justifyContent: 'center', display: 'flex'}}>
        <div className="container-response">

          <div className='res-container'>
            
            <div className='res-content'>         
            <text className='title-response'>Sobre o(a) {state[0].titulo}</text>  
              <Leaflet data={state} index={0} />
      
            </div>

            <div className='res-content'>         
              <text className='title-response'> Sobre o(a) {state[1].titulo}</text>  
              <Leaflet data={state} index={1} />
            
            </div>

          </div>
        </div>
      </div>
    </FadeIn>
  )
}
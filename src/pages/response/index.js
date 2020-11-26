import React from 'react'
import { useLocation,useHistory } from 'react-router-dom';

import Leaflet from '../../components/leaflet'
import FadeIn from 'react-fade-in';

import { RiAlertFill } from 'react-icons/ri';
import { IconContext } from "react-icons";

import './styles.css'

import ImageReference from '../../assets/icone_referencia.png'

export default function Response() {
  const { state } = useLocation();
  const history = useHistory();

  return (
    <FadeIn>
      <div  className="container-parent">
        <div className="container-response">

          <div className="container-listen">
            <text>
                Aqui você encontra as informações básicas dos medicamentos {state[0].titulo} e {state[1].titulo}. Para esclarecimento de dúvidas, procure um profissional da saúde! <br /><br />
                Atenção: Este projeto não possui nenhum vínculo e/ou contato com qualquer laboratório farmacêutico ou farmácia. Informações sobre preços, planos de desconto, representantes, locais de distribuição ou reclamações sobre os produtos devem ser encaminhadas diretamente ao laboratório em questão. Agradecemos a compreensão.
            </text>           
          </div>

          <div className="container-warning">
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#ffbd59", marginRight: 10}}}>
              <div>
                <RiAlertFill />
              </div>
            </IconContext.Provider>

            <text>
              Informações importantes!
            </text> 
          </div>

          
          <div className='res-container'>
            
            <div className='res-content'>      
              <div className="name-content">
                <img src={ImageReference} style={{width: 40}}/>
                <text className='title-response'>{state[0].titulo}</text>  
              </div>   
              <Leaflet data={state} index={0} />
      
            </div>

            <div className='res-content'>         
              <div className="name-content">
                <img src={ImageReference} style={{width: 40}}/>
                <text className='title-response'>{state[1].titulo}</text>  
              </div>   
              <Leaflet data={state} index={1} />
            
            </div>
          </div>

          <div className="footer">
            <text className="text-footer">
              Ainda não encontrou o que precisava? Faça uma nova busca!
            </text> 
            <button className="button_new_search" onClick={() => history.push('form')}>
              Nova busca
            </button>
          </div>

        </div>
      </div>
    </FadeIn>
  )
}
import React from "react";
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import { RiAlertFill } from 'react-icons/ri';

import FadeIn from 'react-fade-in';


import { useHistory } from "react-router-dom";

import "./styles.css"

export default function Home() {
  const history = useHistory();

  const navigateTo = () => history.push('/form');
  
  return (
    
    <div className="section">

      <div className='sparrow'></div>

      <FadeIn>
        <div className="content-title">

          <text className="title">Consulte suas bulas online</text>
          <text className="subtitle">Combine dois medicamentos e compare seus beneficios para o melhor uso.</text>

          <div className="warning-container">
            <IconContext.Provider  value={{ style: {fontSize: '20px', color: "#ffbd59", marginRight: '5px'}}}>
                <div>
                  <RiAlertFill />
                </div>
              </IconContext.Provider>
            <text className="warning">Lembre-se, não consuma medicamentos sem antes uma prescrição médica.</text>
          </div>

          <button className="button" onClick={navigateTo}>
            <IconContext.Provider  value={{ style: {fontSize: '30px', color: "#e31b24 ", marginBottom: '10px'}}}>
              <div>
                <FaSearch />
              </div>
            </IconContext.Provider>
            Iniciar consulta
          </button>

        </div>
      </FadeIn>
    </div>  
  );
}

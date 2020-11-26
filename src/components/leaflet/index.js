import React, { useEffect, useState } from 'react';

import { Collapse } from 'react-bootstrap';
import { FiPlus } from "react-icons/fi";
import { RiAlertFill } from 'react-icons/ri';

import { IconContext } from "react-icons";

import { 
  ComoDevoUsarEsteMedicamento, 
  ComoEsteMedicamentoFunciona,
  GruposFarmacologicos, 
  IndicacoesTerapeuticas,
  InteraçõesMedicamentosas,
  OQueDevoFazerQuandoEsquecer,
  OQueDevoSaberAntesDeUsar,
  OQueFazerSeAlguemUsarUmaQuantidadeMaior,
  OndeComoEPorQuantoTempoPossoGuardar,
  ParaQueEsteMedicamentoIndicado,
  PrincipiosAtivos,
  QuaisOsMales,
  QuandoNaoDevoUsar

} from './strings';

import './styles.css'

const Leaflet = ({data, index}) => {

  const [interactions, setInteractions] = useState(false)
  const [actives, setActives] = useState(false)

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);

  useEffect(() => {
    console.log(data, index);
  }, [])

  return (
    <>
      <div className='info-card'>
        <div className='content-button-title'>
          <div>
            <button className='button-collapse' onClick={() => setInteractions(interactions ? false : true)}>
              <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
                <div>
                  <FiPlus />
                </div>
              </IconContext.Provider>
            </button>
            
            <text className='title-info-card'>{InteraçõesMedicamentosas.toUpperCase()}</text> 
          </div>
        
          <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#ffbd59"}}}>
            <div>
              <RiAlertFill />
            </div>
          </IconContext.Provider>
        </div>

        <Collapse in={interactions}>
          <text  className='text-info-card'>
            {data[index][InteraçõesMedicamentosas]}
          </text>
        </Collapse>     
      </div>

      <div className='info-card'>
        <div className='content-button-title'>
          <div>
            <button className='button-collapse' onClick={() => setActives(actives ? false : true)}>
              <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
                <div>
                  <FiPlus />
                </div>
              </IconContext.Provider>
            </button>
            <text className='title-info-card'>{PrincipiosAtivos.toUpperCase()}</text>
          </div>

          <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#ffbd59"}}}>
            <div>
              <RiAlertFill />
            </div>
          </IconContext.Provider>
        </div>
       
        <Collapse in={actives}>
          <text  className='text-info-card'>
            {data[index][PrincipiosAtivos]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen1(open1 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{ComoDevoUsarEsteMedicamento.toUpperCase()}</text>
        </div>
      
        <Collapse in={open1}>
          <text  className='text-info-card'>
            {data[index][ComoDevoUsarEsteMedicamento]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen2(open2 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{ComoEsteMedicamentoFunciona.toUpperCase()}</text>
        </div>
      
        <Collapse in={open2}>
          <text  className='text-info-card'>
            {data[index][ComoEsteMedicamentoFunciona]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen3(open3 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{GruposFarmacologicos.toUpperCase()}</text>
        </div>
      
        <Collapse in={open3}>
          <text  className='text-info-card'>
            {data[index][GruposFarmacologicos]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen4(open4 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{IndicacoesTerapeuticas.toUpperCase()}</text>
        </div>
      
        <Collapse in={open4}>
          <text  className='text-info-card'>
            {data[index][IndicacoesTerapeuticas]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen5(open5 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{OQueDevoFazerQuandoEsquecer.toUpperCase()}</text>
        </div>
      
        <Collapse in={open5}>
          <text  className='text-info-card'>
            {data[index][OQueDevoFazerQuandoEsquecer]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen6(open6 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{OQueDevoSaberAntesDeUsar.toUpperCase()}</text>
        </div>
      
        <Collapse in={open6}>
          <text className='text-info-card'>
            {data[index][OQueDevoSaberAntesDeUsar]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen7(open7 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>          
            <text className='title-info-card'>{OQueFazerSeAlguemUsarUmaQuantidadeMaior.toUpperCase()}</text>
        </div>
      
        <Collapse in={open7}>
          <text  className='text-info-card'>
            {data[index][OQueFazerSeAlguemUsarUmaQuantidadeMaior]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen8(open8 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{OndeComoEPorQuantoTempoPossoGuardar.toUpperCase()}</text>
        </div>
      
        <Collapse in={open8}>
          <text  className='text-info-card'>
            {data[index][OndeComoEPorQuantoTempoPossoGuardar]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen9(open9 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{ParaQueEsteMedicamentoIndicado.toUpperCase()}</text>
        </div>
      
        <Collapse in={open9}>
          <text  className='text-info-card'>
            {data[index][ParaQueEsteMedicamentoIndicado]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen10(open10 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{QuaisOsMales.toUpperCase()}</text>
        </div>
      
        <Collapse in={open10}>
          <text  className='text-info-card'>
            {data[index][QuaisOsMales]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <div>
          <button className='button-collapse' onClick={() => setOpen11(open11 ? false : true)}>
            <IconContext.Provider  value={{ style: {fontSize: '25px', color: "#fff"}}}>
              <div>
                <FiPlus />
              </div>
            </IconContext.Provider>
          </button>
          <text className='title-info-card'>{QuandoNaoDevoUsar.toUpperCase()}</text>
        </div>
      
        <Collapse in={open11}>
          <text  className='text-info-card'>
            {data[index][QuandoNaoDevoUsar]}
          </text>
        </Collapse>         
      </div>

    </>
  )

}

export default Leaflet
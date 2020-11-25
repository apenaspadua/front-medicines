import React, { useEffect, useState } from 'react';

import { Collapse } from 'react-bootstrap';
import { FiPlus } from "react-icons/fi";

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
        <div>
          <button className='button-collapse' onClick={() => setInteractions(interactions ? false : true)}>
            <FiPlus/>
          </button>
          <text className='title-info-card'>{InteraçõesMedicamentosas.toUpperCase()}</text>
        </div>
      

        <Collapse in={interactions}>
          <text  className='text-info-card'>
            {data[index][InteraçõesMedicamentosas.replace(/\./g, '\n\n')]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <button className='button-collapse' onClick={() => setActives(actives ? false : true)}>
          <FiPlus/>
        </button>

        <text>{PrincipiosAtivos}</text>

        <Collapse in={actives}>
          <text>
            {data[index][PrincipiosAtivos]}
          </text>
        </Collapse>         
      </div>


      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen1(open1 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{ComoDevoUsarEsteMedicamento}</text>

        <Collapse in={open1}>
          <text>
            {data[index][ComoDevoUsarEsteMedicamento]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen2(open2 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{ComoEsteMedicamentoFunciona}</text>

        <Collapse in={open2}>
          <text>
            {data[index][ComoEsteMedicamentoFunciona]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen3(open3 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{GruposFarmacologicos}</text>

        <Collapse in={open3}>
          <text>
            {data[index][GruposFarmacologicos]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen4(open4 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{IndicacoesTerapeuticas}</text>

        <Collapse in={open4}>
          <text>
            {data[index][IndicacoesTerapeuticas]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen5(open5 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{OQueDevoFazerQuandoEsquecer}</text>

        <Collapse in={open5}>
          <text>
            {data[index][OQueDevoFazerQuandoEsquecer]}
          </text>
        </Collapse>         
      </div>

      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen6(open6 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{OQueDevoSaberAntesDeUsar}</text>

        <Collapse in={open6}>
          <text>
            {data[index][OQueDevoSaberAntesDeUsar]}
          </text>
        </Collapse>         
      </div>
      
      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen7(open7 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{OQueFazerSeAlguemUsarUmaQuantidadeMaior}</text>

        <Collapse in={open7}>
          <text>
            {data[index][OQueFazerSeAlguemUsarUmaQuantidadeMaior]}
          </text>
        </Collapse>         
      </div>
      
      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen8(open8 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{OndeComoEPorQuantoTempoPossoGuardar}</text>

        <Collapse in={open8}>
          <text>
            {data[index][OndeComoEPorQuantoTempoPossoGuardar]}
          </text>
        </Collapse>         
      </div>
      
      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen9(open9 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{ParaQueEsteMedicamentoIndicado}</text>

        <Collapse in={open9}>
          <text>
            {data[index][ParaQueEsteMedicamentoIndicado]}
          </text>
        </Collapse>         
      </div>
      
      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen10(open10 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{QuaisOsMales}</text>

        <Collapse in={open10}>
          <text>
            {data[index][QuaisOsMales]}
          </text>
        </Collapse>         
      </div>
      
      <div className='info-card'>
        <button className='button-collapse' onClick={() => setOpen11(open11 ? false : true)}>
          <FiPlus/>
        </button>

        <text>{QuandoNaoDevoUsar}</text>

        <Collapse in={open11}>
          <text>
            {data[index][QuandoNaoDevoUsar]}
          </text>
        </Collapse>         
      </div>
      
    </>
  )

}

export default Leaflet
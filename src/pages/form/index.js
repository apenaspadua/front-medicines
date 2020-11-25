import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaArrowDown } from 'react-icons/fa';
import { FiMeh, FiCheck } from 'react-icons/fi';

import FadeIn from 'react-fade-in';
import Rodal from 'rodal';
import Loader from 'react-loader-spinner'

import api from '../../services/api'
import './styles.css'

// MODALS
const ModalLoader = () => (
  <>
    <text className="text-loader">Buscando informações...</text>
    <Loader
      type="ThreeDots"
      color="#e31b24"
      height={60}
      width={60}/>
  </>
)

const ModalError = () => (
  <>
    <IconContext.Provider  value={{ style: {fontSize: '50px', color: "#e31b24", marginBottom: 20, marginTop: 20}}}>
      <div>
        <FiMeh />
      </div>
    </IconContext.Provider>

    <text className="text-loader">Algo deu errado!</text>
    <text className="text-loader-sub">Verifique se preencheu corretamente todos os campos.</text>
  </>
)

const ModalSuccess = ({data}) => {
  const history = useHistory();

  return (
    <>
      <IconContext.Provider  value={{ style: {fontSize: '50px', color: "#6cc745", marginBottom: 20, marginTop: 20}}}>
        <div>
          <FiCheck />
        </div>
      </IconContext.Provider>

      <text className="text-loader">Encontramos o que precisava!</text>
      <button className="button_success" onClick={() => history.push({pathname: 'response', state: data}) }>
        Consultar
      </button>
      
    </>
  )
}
// END MODALS

export default function Form() {

  const [priDrug, setPriDrug] = useState('')
  const [secDrug, setSecDrug] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState( <ModalLoader />)

  async function handleSubmit(primary_drug, second_drug) {   
    
    const data = {
      primary_drug,
      second_drug
    }    

    await api.post('medicines', data)
      .then(res => {    
        setModalType(<ModalSuccess data={res.data}/>)       
      })
      
      .catch((error) => { 
        setModalType(<ModalError /> )       
        console.log(error) 
      });
  }

  const show = () => {
    setShowModal(true)
  }

  const hide = () => {
    setShowModal(false)
    setModalType(<ModalLoader />)
  }
 
  return (
    <div className='section'>

      <Rodal visible={showModal} onClose={() => hide()}>
        <div className="content-modal">
          {modalType}
        </div>
      </Rodal>
      
      <div className='sparrow'></div>

      <FadeIn>
        <div className="container">
        
            <text className="title_form">Pesquise os medicamentos desejados</text>

            <div className="forms">

              <div className="fisrt-form">
                <input type="text" class="form__input" id="name" placeholder="Ex: Aspirina" required="" onChange={drug => setPriDrug(drug.target.value)}/>
                {/* <label for="name" class="form__label">Primeiro medicamento</label> */}
              </div>
            
              <IconContext.Provider  value={{ style: {fontSize: '20px', color: "#e31b24", marginBottom: 20, marginTop: 20}}}>
                <div>
                  <FaArrowDown />
                </div>
              </IconContext.Provider>


              <div className="second-form">
                <input type="text" class="form__input" id="name" placeholder="Ex: Diazepam" required="" onChange={drug => setSecDrug(drug.target.value)}/>
                {/* <label for="name" class="form__label">Segundo medicamento</label> */}
              </div>
            
            </div>

            <button className="button_search" onClick={() => {
              show()
              handleSubmit(priDrug, secDrug)
            }}>
              Buscar bulas
            </button>
        
        </div>

      </FadeIn>
      
    </div>
   
  );
}

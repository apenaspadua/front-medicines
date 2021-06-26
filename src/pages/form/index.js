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
      width={60} />
  </>
)

const ModalError = ({ text }) => (
  <>
    <IconContext.Provider value={{ style: { fontSize: '50px', color: "#e31b24", marginBottom: 20, marginTop: 20 } }}>
      <div>
        <FiMeh />
      </div>
    </IconContext.Provider>

    <text className="text-loader">Algo deu errado!</text>
    <text className="text-loader-sub">{text}</text>
  </>
)

const ModalSuccess = ({ data }) => {
  const history = useHistory();

  return (
    <>
      <IconContext.Provider value={{ style: { fontSize: '50px', color: "#6cc745", marginBottom: 20, marginTop: 20 } }}>
        <div>
          <FiCheck />
        </div>
      </IconContext.Provider>

      <text className="text-loader">Encontramos o que precisava!</text>
      <button className="button_success" onClick={() => { }}>
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
  const [modalType, setModalType] = useState(<ModalLoader />)

  // VALIDACOES TESTE - PLAYMATCH

  const validateInput = (primary_drug) => {
    if (primary_drug === "Covid19") return setModalType(<ModalError text="Isso não é um medicamento!" />)
    else if (primary_drug.length > 10) return setModalType(<ModalError text="String maior do que espera" />)
    else return true
  }

  async function handleSubmit(primary_drug, second_drug) {

    if (validateInput(primary_drug)) {
      setModalType(<ModalSuccess />)
    }
  }

  // FIM - VALIDACOES TESTE - PLAYMATCH

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
              <input type="text" class="form__input" id="name" placeholder="Ex: Aspirina" required="" onChange={drug => setPriDrug(drug.target.value)} />
              {/* <label for="name" class="form__label">Primeiro medicamento</label> */}
            </div>

            <IconContext.Provider value={{ style: { fontSize: '20px', color: "#e31b24", marginBottom: 20, marginTop: 20 } }}>
              <div>
                <FaArrowDown />
              </div>
            </IconContext.Provider>


            <div className="second-form">
              <input type="text" class="form__input" id="name" placeholder="Ex: Diazepam" required="" onChange={drug => setSecDrug(drug.target.value)} />
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

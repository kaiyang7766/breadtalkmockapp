import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const HK_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyNTgJtxBfS2AgI6ZyV1Zs6X1tzSYL6FQj93zkly57t82bWo_1vlC2FNxYqh3EiC-Oa/exe';

    useEffect(()=>{
      const form=document.forms['hk_trace'];
      form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))});
    });

  const closeModal =()=>{
    dispatch({type:'CLOSE_MODAL'})
  };
  
  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <div>
      <h2>HK Traceability 厨房追溯系统</h2>
      <h4>Please input Expiry/Received date 请添加有效期日 / 货到期日</h4>
    </div>
    <article>
        <form name ="hk_trace" className='form'>
          <div className='form-control'>
            <h6>AX Code:31101168 Chilled Chicken Quarter Leg "Chicken Thigh with Drumstick"</h6>
            <input
              type='date'
              id='item1'
              name='31101168 Chilled Chicken Quarter Leg "Chicken Thigh with Drumstick"'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31102076 Chilled Pork Belly Cube</h6>
            <input
              type='date'
              id='item2'
              name='31102076 Chilled Pork Belly Cube'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31101167 Chilled Chicken Breast Skinless "Whole"</h6>
            <input
              type='date'
              id='item3'
              name='31101167 Chilled Chicken Breast Skinless "Whole"'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31301127 Peeled Yam (Local/Thai) Chilled</h6>
            <input
              type='date'
              id='item4'
              name='31301127 Peeled Yam (Local/Thai) Chilled'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30607005 Chai Po (Small Piece) 菜脯(小片)</h6>
            <input
              type='date'
              id='item5'
              name='30607005 Chai Po (Small Piece) 菜脯(小片)'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:PDTO Frozen Prawn 61-70</h6>
            <input
              type='date'
              id='item6'
              name='PDTO Frozen Prawn 61-70'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31301014 Cabbage Beijing (北京包菜)</h6>
            <input
              type='date'
              id='item7'
              name='31301014 Cabbage Beijing (北京包菜)'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31002008 Pork Collar Cubed 2cm 五花肉</h6>
            <input
              type='date'
              id='item8'
              name='31002008 Pork Collar Cubed 2cm 五花肉'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31002001 Chilled Pork Minced</h6>
            <input
              type='date'
              id='item9'
              name='31002001 Chilled Pork Minced'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30403007 Liquid Whole Egg</h6>
            <input
              type='date'
              id='item10'
              name='30403007 Liquid Whole Egg'
            />
          </div>
          <button type='submit' onClick={()=>alert('Submitted!')}>Add 添加</button>
        </form>
        </article>
    </>
   );
};

export default HK_T;

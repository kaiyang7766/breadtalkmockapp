import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const Cake_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwkAyuX-FihMiDV2UABHADegT9Ok8Qv_lp9gsKxudwo3YeGCpWq5J3Icx4gWNufIXEk/exe';

    useEffect(()=>{
      const form=document.forms['cake_trace'];
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
      <h2>Cake Traceability 蛋糕部追溯系统</h2>
      <h4>Please input Expiry/Received date 请添加有效期日 / 货到期日</h4>
    </div>
    <article>
        <form name ="cake_trace" className='form'>
          <div className='form-control'>
            <h6>AX Code:30403005 Liquid Egg White</h6>
            <input
              type='date'
              id='item1'
              name='30403005 Liquid Egg White'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30403006 Liquid Egg Yolk</h6>
            <input
              type='date'
              id='item2'
              name='30403006 Liquid Egg Yolk'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30403007 Liquid Whole Egg</h6>
            <input
              type='date'
              id='item3'
              name='30403007 Liquid Whole Egg'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30905001 Coconut Milk-Fresh</h6>
            <input
              type='date'
              id='item4'
              name='30905001 Coconut Milk-Fresh'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30602103 Black Sesame Paste</h6>
            <input
              type='date'
              id='item5'
              name='30602103 Black Sesame Paste'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30106012 President Whipping Cream UHT 35.1%</h6>
            <input
              type='date'
              id='item6'
              name='30106012 President Whipping Cream UHT 35.1%'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30101019 Unsalted Butter "Anchor" NZ</h6>
            <input
              type='date'
              id='item7'
              name='30101019 Unsalted Butter "Anchor" NZ'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30106028 EV Performance Universal Cream 35.1%</h6>
            <input
              type='date'
              id='item8'
              name='30106028 EV Performance Universal Cream 35.1%'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30102061 Mascarpone Cheese</h6>
            <input
              type='date'
              id='item9'
              name='30102061 Mascarpone Cheese'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30102087 Anchor Cream Cheese</h6>
            <input
              type='date'
              id='item10'
              name='30102087 Anchor Cream Cheese'
            />
          </div>
          <button type='submit' onClick={()=>alert('Submitted!')}>Add 添加</button>
        </form>
        </article>
    </>
   );
};

export default Cake_T;

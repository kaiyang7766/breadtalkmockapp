import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const AM_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz3dsC3QKxAhhSdXnjbSCTDUtEvcqC2fXp2NUOxfbk81bREOiDqEfgFKZYx2csprnv9/exe';

    useEffect(()=>{
      const form=document.forms['am_trace'];
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
      <h2>A-Mix Traceability 追溯系统</h2>
      <h4>Please input Expiry/Received date 请添加有效期日 / 货到期日</h4>
    </div>
    <article>
        <form name ="am_trace" className='form'>
          <div className='form-control'>
            <h6>AX Code:30105012 Miraka Whole Milk Powder WMP01 Nz Halal</h6>
            <input
              type='date'
              id='item1'
              name='30105012 Miraka Whole Milk Powder WMP01 Nz Halal'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30505075 Coriander Powder</h6>
            <input
              type='date'
              id='item2'
              name='30505075 Coriander Powder'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30503018 White Pepper Powder High Quality</h6>
            <input
              type='date'
              id='item3'
              name='30503018 White Pepper Powder High Quality'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30808031 Tegral Satin Cream</h6>
            <input
              type='date'
              id='item4'
              name='30808031 Tegral Satin Cream'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30805003 Necklace Flour</h6>
            <input
              type='date'
              id='item5'
              name='30805003 Necklace Flour'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30508061 Delice Instant Custard Powder</h6>
            <input
              type='date'
              id='item6'
              name='30508061 Delice Instant Custard Powder'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30508025 Magimix Blue-Dough Improver</h6>
            <input
              type='date'
              id='item7'
              name='30508025 Magimix Blue-Dough Improver'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30808007 Bread Improver Puratos S500 Magro/Actiplus</h6>
            <input
              type='date'
              id='item8'
              name='30808007 Bread Improver Puratos S500 Magro/Actiplus'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30808032 Tegral Satin Cream Cake Choc</h6>
            <input
              type='date'
              id='item9'
              name='30808032 Tegral Satin Cream Cake Choc'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30811026 Rye Flour/Redman</h6>
            <input
              type='date'
              id='item10'
              name='30811026 Rye Flour/Redman'
            />
          </div>
          <button type='submit' onClick={()=>alert('Submitted!')}>Add 添加</button>
        </form>
        </article>
    </>
   );
};

export default AM_T;

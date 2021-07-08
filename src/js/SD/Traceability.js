import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const SD_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyrMmfeUNPih-oQxrnecQW2Iy9kAHXbK_rowGaexmiDvdJsQIIraBPpmSRnmomiKWX9/exe';

    useEffect(()=>{
      const form=document.forms['sd_trace'];
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
      <h2>SD Traceability 整型部追溯系统</h2>
      <h4>Please input Expiry/Received date 请添加有效期日 / 货到期日</h4>
    </div>
    <article>
        <form name ="sd_trace" className='form'>
          <div className='form-control'>
            <h6>AX Code:31102063 Picnic Ham Sliced</h6>
            <input
              type='date'
              id='item1'
              name='31102063 Picnic Ham Sliced'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31101157 Chicken Hot Dog</h6>
            <input
              type='date'
              id='item2'
              name='31101157 Chicken Hot Dog'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31101080 Chicken Cheese Sausage 4.5"</h6>
            <input
              type='date'
              id='item3'
              name='31101080 Chicken Cheese Sausage 4.5"'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31301052 Small Red Onion (Peeled)</h6>
            <input
              type='date'
              id='item4'
              name='31301052 Small Red Onion (Peeled)'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30102087 Anchor Cream Cheese</h6>
            <input
              type='date'
              id='item5'
              name='30102087 Anchor Cream Cheese'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30101005 Anchor Salted Butter</h6>
            <input
              type='date'
              id='item6'
              name='30101005 Anchor Salted Butter'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30606011 Tuna Flake in Soya Oil</h6>
            <input
              type='date'
              id='item7'
              name='30606011 Tuna Flake in Soya Oil'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30106023 Whipping Cream (Dairy)/Millac</h6>
            <input
              type='date'
              id='item8'
              name='30106023 Whipping Cream (Dairy)/Millac'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30502142 Baking Mayonnaise Kewpie</h6>
            <input
              type='date'
              id='item9'
              name='30502142 Baking Mayonnaise Kewpie'
            />
          </div>
          <button type='submit' onClick={()=>alert('Submitted!')}>Add 添加</button>
        </form>
        </article>
    </>
   );
};

export default SD_T;

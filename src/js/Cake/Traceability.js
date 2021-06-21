import React, { useState, useReducer } from 'react';
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

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwkAyuX-FihMiDV2UABHADegT9Ok8Qv_lp9gsKxudwo3YeGCpWq5J3Icx4gWNufIXEk/exec';
    const form=document.forms['cake_trace'];

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        // const newItem={id:new Date().getTime().toString(),name};
        // dispatch({type:'ADD_ITEM',payload:newItem});
    };

  const closeModal =()=>{
    dispatch({type:'CLOSE_MODAL'})
  };
  
  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <div>
      <h2>Cake Traceability</h2>
    </div>
    <article>
        <form name ="cake_trace" onSubmit={handleSubmit} className='form'>
          <div className='form-control'>
            <label>Item 1 Expiry date:</label>
            <input
              type='date'
              id='Expiry_1'
              name='Item_1_Expiry'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Exp2'>Item 2 Expiry date:</label>
            <input
              type='date'
              id='Expiry_2'
              name='Item_2_Expiry'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Exp3'>Item 3 Expiry date:</label>
            <input
              type='date'
              id='Expiry_3'
              name='Item_3_Expiry'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Exp4'>Item 4 Expiry date:</label>
            <input
              type='date'
              id='Expiry_4'
              name='Item_4_Expiry'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Exp5'>Item 5 Expiry date:</label>
            <input
              type='date'
              id='Expiry_5'
              name='Item_5_Expiry'
            />
          </div>
          <button type='submit' onClick={()=>alert('Submitted!')}>Add 添加</button>
        </form>
        </article>
    </>
   );
};

export default Cake_T;

import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const Toast_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwSOpy-fi8z6oi_eEzvI5ZglBsPIJ0NJOuTRJueg9Wtiuv7OuPtc89ApryNyP0FipuY1w/exec';

    useEffect(()=>{
      const form=document.forms['toast_trace'];
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
      <h2>Toast Traceability</h2>
    </div>
    <article>
        <form name ="toast_trace" className='form'>
        <div className='form-control'>
            <h6>AX Code:31205007 Shortening/Redman</h6>
            <input
              type='date'
              id='item1'
              name='31205007 Shortening/Redman'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30902083 Dried Fruit Raisin Black Coated in Oil</h6>
            <input
              type='date'
              id='item2'
              name='30902083 Dried Fruit Raisin Black Coated in Oil'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30301063 Nut Walnut Light Halves Pcs</h6>
            <input
              type='date'
              id='item3'
              name='30301063 Nut Walnut Light Halves Pcs'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30403007 Liquid Whole Egg</h6>
            <input
              type='date'
              id='item4'
              name='30403007 Liquid Whole Egg'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30902010 Dried Fruit Currant</h6>
            <input
              type='date'
              id='item5'
              name='30902010 Dried Fruit Currant'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30906006 Dried Fruit Raisins Golden California/Redman</h6>
            <input
              type='date'
              id='item6'
              name='30906006 Dried Fruit Raisins Golden California/Redman'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30902001 Dried Fruit Mixed Citrus Peel</h6>
            <input
              type='date'
              id='item7'
              name='30902001 Dried Fruit Mixed Citrus Peel'
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
            <h6>AX Code:30604001 Honey/Pure</h6>
            <input
              type='date'
              id='item9'
              name='30604001 Honey/Pure'
            />
          </div>
          <button type='submit' onClick={()=>alert("Item submitted!")}>Add 添加</button>
        </form>
        </article>
    </>
  );
};

export default Toast_T;

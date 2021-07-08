import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const FD_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx96dMDackH6tr_LfWUsbytbHOBQVz_rMpg9JKpgagvBEIyixYq7vNQXfN8A2p_180x1Q/exe';
    
    useEffect(()=>{
      const form=document.forms['fd_trace'];
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
      <h2>Frozen Dough Traceability</h2>
    </div>
    <article>
        <form name ="fd_trace" className='form'>
        <div className='form-control'>
            <h6>AX Code:30403007 Liquid Whole Egg</h6>
            <input
              type='date'
              id='item1'
              name='30403007 Liquid Whole Egg'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30103012 Palffy Margarine 790LTU</h6>
            <input
              type='date'
              id='item2'
              name='30103012 Palffy Margarine 790LTU'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30103004 Chocolate Taste Sheet</h6>
            <input
              type='date'
              id='item3'
              name='30103004 Chocolate Taste Sheet'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30106023 Whipping Cream (Dairy)/Millac</h6>
            <input
              type='date'
              id='item4'
              name='30106023 Whipping Cream (Dairy)/Millac'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30103007 Anchor Butter Sheet</h6>
            <input
              type='date'
              id='item5'
              name='30103007 Anchor Butter Sheet'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30403006 Liquid Egg Yolk</h6>
            <input
              type='date'
              id='item6'
              name='30403006 Liquid Egg Yolk'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30103008 Margarine FN-FS-01</h6>
            <input
              type='date'
              id='item7'
              name='30103008 Margarine FN-FS-01'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30902083 Dried Fruit Raisin Black Coated in Oil</h6>
            <input
              type='date'
              id='item8'
              name='30902083 Dried Fruit Raisin Black Coated in Oil'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30101019 Unsalted Butter "Anchor" NZ</h6>
            <input
              type='date'
              id='item9'
              name='30101019 Unsalted Butter "Anchor" NZ'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31501020 Cocoa Chips Bakeable/Redman</h6>
            <input
              type='date'
              id='item10'
              name='31501020 Cocoa Chips Bakeable/Redman'
            />
          </div>
          <button type='submit' onClick={()=>alert("Item submitted!")}>Add 添加</button>
        </form>
        </article>
    </>
  );
};

export default FD_T;

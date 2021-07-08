import React, { useState, useReducer, useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const TMC_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbymQL5r-LivL4W7n0LEWFMGLc0vZdTe3tyHuao-ZdbKsDXJlu2KuzVSQb7GxvgkMTedJg/exe';

    useEffect(()=>{
      const form=document.forms['tmc_trace'];
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
      <h2>TMC Traceability 泰茂栈追溯系统</h2>
      <h4>Please input Expiry/Received date 请添加有效期日 / 货到期日</h4>
    </div>
    <article>
        <form name ="tmc_trace" className='form'>
          <div className='form-control'>
            <h6>AX Code:30901002 Pineapple w/o skin</h6>
            <input
              type='date'
              id='item1'
              name='30901002 Pineapple w/o skin'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30303004 Rice Glutinous White Mouse Teeth "TMC dumpling"</h6>
            <input
              type='date'
              id='item2'
              name='30303004 Rice Glutinous White Mouse Teeth "TMC dumpling"'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31301129 Yam Peeled (Local/Thai) Chilled</h6>
            <input
              type='date'
              id='item3'
              name='31301129 Yam Peeled (Local/Thai) Chilled'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30605001 Bakkwa Paste</h6>
            <input
              type='date'
              id='item4'
              name='30605001 Bakkwa Paste'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30405001 Shell Egg</h6>
            <input
              type='date'
              id='item5'
              name='30405001 Shell Egg'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31204002 Gross Fatty Oil 猪油</h6>
            <input
              type='date'
              id='item6'
              name='31204002 Gross Fatty Oil 猪油'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31204024 Oil Cooking Vegetable "Goldenbell/Msia"</h6>
            <input
              type='date'
              id='item7'
              name='31204024 Oil Cooking Vegetable "Goldenbell/Msia"'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30602165 White Lotus Paste No Sugar Added/Redman</h6>
            <input
              type='date'
              id='item8'
              name='30602165 White Lotus Paste No Sugar Added/Redman'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30811002 Flour Glutinous Rice Fried (Gao Fen)/Redman</h6>
            <input
              type='date'
              id='item9'
              name='30811002 Flour Glutinous Rice Fried (Gao Fen)/Redman'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30404009 Frozen Salted Egg Yolks</h6>
            <input
              type='date'
              id='item10'
              name='30404009 Frozen Salted Egg Yolks'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30602008 White Lotus Paste 白莲蓉</h6>
            <input
              type='date'
              id='item10'
              name='30602008 White Lotus Paste 白莲蓉'
            />
          </div>
          <button type='submit' onClick={()=>alert('Submitted!')}>Add 添加</button>
        </form>
        </article>
    </>
   );
};

export default TMC_T;

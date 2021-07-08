import React, { useState, useReducer,useEffect } from 'react';
import Modal from '../Modal';
import {reducer} from '../reducer';

const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
  };
const Beverage_T = () => {
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyip0yJkCcmK2L5wDr0OtzxpQz_pdon0QvDQT-uJ48GYrYfXWkRaSmGXLz6twktCvH_FQ/exe';
    
    useEffect(()=>{
      const form=document.forms['beverage_trace'];
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
      <h2>Beverage Traceability</h2>
    </div>
    <article>
        <form name ="beverage_trace" className='form'>
        <div className='form-control'>
            <h6>AX Code:31401171 CL/BT Oolong B</h6>
            <input
              type='date'
              id='item1'
              name='31401171 CL/BT Oolong B'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31401170 CL/BT Jasmine A</h6>
            <input
              type='date'
              id='item2'
              name='31401170 CL/BT Jasmine A'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31101170 Halal Chicken Honey Baked Ham Sliced</h6>
            <input
              type='date'
              id='item3'
              name='31101170 Halal Chicken Honey Baked Ham Sliced'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31301038 Cucumber Japanese</h6>
            <input
              type='date'
              id='item4'
              name='31301038 Cucumber Japanese'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30304133 Non-GMO Special Quality White Hilum Soybeans Canada</h6>
            <input
              type='date'
              id='item5'
              name='30304133 Non-GMO Special Quality White Hilum Soybeans Canada'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31402023 Marigold Evap. Creamer</h6>
            <input
              type='date'
              id='item6'
              name='31402023 Marigold Evap. Creamer'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30403007 Pasteurised Liquid Whole Egg</h6>
            <input
              type='date'
              id='item7'
              name='30403007 Pasteurised Liquid Whole Egg'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30502191 Kewpie Mayonnaise Japanese Style</h6>
            <input
              type='date'
              id='item8'
              name='30502191 Kewpie Mayonnaise Japanese Style'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:31502016 Dark Chocolate Crispearls</h6>
            <input
              type='date'
              id='item9'
              name='31502016 Dark Chocolate Crispearls'
            />
          </div>
          <div className='form-control'>
            <h6>AX Code:30404003 Paste Yolk Boiled Egg</h6>
            <input
              type='date'
              id='item10'
              name='30404003 Paste Yolk Boiled Egg'
            />
          </div>
          <button type='submit' onClick={()=>alert("Item submitted!")}>Add 添加</button>
        </form>
        </article>
    </>
  );
};

export default Beverage_T;

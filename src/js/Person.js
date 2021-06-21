import React, { useState, useEffect } from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
  const [name,setName]=useState('Default');
  const {id}=useParams(); //Get the 'id' from the path link

  useEffect(()=>{
    const newPerson = data.find((person)=>person.id === parseInt(id));
    setName(newPerson.name);
  },[])

  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>Back to People</Link>
    </div>
  );
};

export default Person;

import React from 'react';
import './Number.css';

const Input = ({onChange, state }) => {
   return (
       <div>
        <input 
            className='input-field'
            type='search' 
            placeholder='Your favourite number'
            value={state}
            onChange={e => onChange(e.target.value)}
        />
       </div>
   );
} 

export default Input;
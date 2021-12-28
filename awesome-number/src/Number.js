import React, { Component } from 'react';
import logo from './logo.svg';
import './Number.css';
import Input from './Input';

const NumberComponent = ({ state, onChange }) => {
    return (
        <div className="number-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className='input-wrapper'>
                <h1>{state}</h1>
                <Input onChange={onChange} state={state} />
            </div>
        </div>
    )
}

export default NumberComponent
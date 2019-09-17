import React from 'react';

const Hambureger = props =>{
    return (
      <button onClick={()=>props.toggleHamburger()} className="hambureger">
        <span  className="hambureger__span hambureger__span--1">|</span>
        <span  className="hambureger__span hambureger__span--2">|</span>
        <span  className="hambureger__span hambureger__span--3">|</span>
      </button>   
    )
}

export default Hambureger;

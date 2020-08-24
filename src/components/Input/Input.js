import React from 'react'

export default function Input({initialCapital, inputName, minValue, maxValue, inputChange, stepsInput}) {
    return (
       
        <div className="input-field">
          <input value={initialCapital} type="number" className='validate' min={minValue} max={maxValue} step={stepsInput} onChange={(event)=> inputChange(event.target.value)}/>
          <label className='active' >{inputName}</label>
        </div>
    )
}

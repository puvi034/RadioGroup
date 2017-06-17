import React from 'react';

const Radio = ({value,selectedOption,handleChange,children}) => {
  return(
    <label>
      <input
        type="radio"
        value={value}
        checked={value === selectedOption}
        onChange={handleChange}
      />
      {children}
    </label>
  )
}

export default Radio;
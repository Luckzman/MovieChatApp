import React from 'react'
import PropTypes from 'prop-types';


const CustomInput = ({name, value, placeholder, showBtn, onChange, onSubmit}) => {
  const InputBtnType = (
    <div class="ui action input">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} />
      
        <button type="submit" onSubmit={onSubmit} class="ui blue icon right labeled button">
          <i aria-hidden="true" class="comment alternate icon"></i>
          Comment
        </button>
    </div>
  );

  const NormalInput = (
    <div class="ui input">
      <input 
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  )


  return showBtn ? InputBtnType : NormalInput
};


CustomInput.propTypes = {
  showBtn: PropTypes.element
}

CustomInput.defaultProps = {
  showBtn: false
}

export default CustomInput;

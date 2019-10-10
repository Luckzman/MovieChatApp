import React from 'react'
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';


const CustomInput = ({placeholder, showBtn}) => {
  const InputBtnType = (
    <div class="ui action input">
      <input type="text" value="" placeholder={placeholder} />
      
        <button class="ui teal icon right labeled button">
          <i aria-hidden="true" class="comment alternate icon"></i>
          Comment
        </button>
    </div>
  );



  return showBtn ? InputBtnType : <Input placeholder={placeholder} />
};


CustomInput.propTypes = {
  showBtn: PropTypes.element
}

CustomInput.defaultProps = {
  showBtn: false
}

export default CustomInput;

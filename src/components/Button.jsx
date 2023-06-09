import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onButtonClick,
  buttonName,
  buttonClass,
  testId,
  buttonImg,
  isButtonDisabled,
}) {
  return (
    <button
      type="button"
      onClick={ onButtonClick }
      className={ buttonClass }
      data-testid={ testId }
      disabled={ isButtonDisabled }
    >
      {buttonName}
      {buttonImg && (
        <img
          src={ buttonImg.src }
          data-testid={ buttonImg.testId }
          alt={ buttonImg.alt }
        />
      )}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onButtonClick: PropTypes.func,
  buttonName: PropTypes.string,
  buttonClass: PropTypes.string,
}.isRequired;

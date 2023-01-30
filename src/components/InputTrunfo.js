import React from 'react';
import PropTypes from 'prop-types';

class InputTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        Super Trybe Trunfo
        <input
          name="cardTrunfo"
          id="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputTrunfo.propTypes = {
  checked: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default InputTrunfo;

// <label htmlFor="cardTrunfo">
// Super Trybe Trunfo
// <input
//   name="cardTrunfo"
//   id="cardTrunfo"
//   type="checkbox"
//   data-testid="trunfo-input"
//   checked={ cardTrunfo }
//   onChange={ onInputChange }
// />
// </label>

// link que explica o lint de ternario pra react:
// https://beta.reactjs.org/learn/conditional-rendering

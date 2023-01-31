import React from 'react';
import Proptypes from 'prop-types';

class InputFilter extends React.Component {
  render() {
    const { inputFilter, onInputChange } = this.props;
    return (
      <label htmlFor="inputFilter">
        Filtro de busca
        <input
          name="inputFilter"
          id="inputFilter"
          type="text"
          data-testid="name-filter"
          value={ inputFilter }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputFilter.propTypes = {
  inputFilter: Proptypes.string,
  onInputChange: Proptypes.func,
}.isRequired;

export default InputFilter;

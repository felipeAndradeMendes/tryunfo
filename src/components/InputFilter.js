import React from 'react';

class InputFilter extends React.Component {
  render() {
    return (
      <label htmlFor="inputFilter">
        Filtro de busca
        <input
          name="inputFilter"
          id="inputFilter"
          type="text"
          data-testid="name-filter"
        />
      </label>
    );
  }
}

export default InputFilter;

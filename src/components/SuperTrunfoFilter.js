import React from 'react';

class SuperTrunfoFilter extends React.Component {
  render() {
    const { onInputChange, isChecked } = this.props;
    return (
      <label htmlFor="superTrunfoFilter">
        Super Trunfo
        <input
          data-testid="trunfo-filter"
          id="superTrunfoFilter"
          name="superTrunfoFilter"
          type="checkbox"
          onChange={ onInputChange }
          checked={ isChecked }
        />
      </label>
    );
  }
}

export default SuperTrunfoFilter;

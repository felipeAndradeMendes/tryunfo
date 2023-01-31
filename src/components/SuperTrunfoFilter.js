import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoFilter extends React.Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <label htmlFor="superTrunfoFilter">
        Super Trunfo
        <input
          data-testid="trunfo-filter"
          id="superTrunfoFilter"
          name="superTrunfoFilter"
          type="checkbox"
          onChange={ onInputChange }
          defaultChecked={ false }
        />
      </label>
    );
  }
}

SuperTrunfoFilter.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;

export default SuperTrunfoFilter;

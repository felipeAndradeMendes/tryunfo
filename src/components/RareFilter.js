import React from 'react';
import PropTypes from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const { rareFilter, onInputChange } = this.props;
    return (
      <label htmlFor="rareFilter">
        <select
          id="rareFilter"
          data-testid="rare-filter"
          value={ rareFilter }
          onChange={ onInputChange }
          name="rareFilter"
          type="select"
          // onSelectCapture={ onInputChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

RareFilter.propTypes = {
  rareFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default RareFilter;

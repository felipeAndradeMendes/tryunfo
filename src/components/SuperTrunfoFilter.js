import React from 'react';

class SuperTrunfoFilter extends React.Component {
  render() {
    return (
      <label htmlFor="SuperTrunfoFilter">
        Super Trunfo
        <input 
        data-testid="trunfo-filter"
        id="SuperTrunfoFilter"
        name="SuperTrunfoFilter"
        type="checkbox"
        />
      </label>
    );
  }
}

export default SuperTrunfoFilter;
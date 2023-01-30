import React from 'react';
import PropTypes from 'prop-types';

class ButtonExcluir extends React.Component {
  render() {
    const { name, excluirCard } = this.props;
    return (
      <button
        data-testid="delete-button"
        name={ name }
        type="button"
        onClick={ excluirCard }
      >
        Excluir
      </button>
    );
  }
}

ButtonExcluir.propTypes = {
  name: PropTypes.string,
  excluirCard: PropTypes.func,
}.isRequired;

export default ButtonExcluir;

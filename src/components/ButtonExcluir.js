import React from 'react';

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

export default ButtonExcluir;
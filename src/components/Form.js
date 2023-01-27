import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="cardName">
          Nome
          <input
            name="cardName"
            id="cardName"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <input
            name="cardDescription"
            id="cardDescription"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="cardAttr1">
          Attr01
          <input
            name="cardAttr1"
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="cardAttr2">
          Attr02
          <input
            name="cardAttr2"
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="cardAttr3">
          Attr03
          <input
            name="cardAttr3"
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            name="cardImage"
            id="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select id="cardRare" data-testid="rare-input">
            <option name="normal">normal</option>
            <option name="raro">raro</option>
            <option name="muitoRaro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          <input
            name="cardTrunfo"
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          name="btnSalvar"
          id="btnSalvar"
          data-testid="save-button"
          value="Salvar"
        >
          Salvar
        </button>
      </>
    );
  }
}

export default Form;

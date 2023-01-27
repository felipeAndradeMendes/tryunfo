import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="nome">
          Nome
          <input
            name="nome"
            id="nome"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input
            name="descricao"
            id="descricao"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr01">
          Attr01
          <input
            name="attr01"
            id="attr01"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr02">
          Attr02
          <input
            name="attr02"
            id="attr02"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr03">
          Attr03
          <input
            name="attr03"
            id="attr03"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imagem">
          Imagem
          <input
            name="imagem"
            id="imagem"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select id="raridade" data-testid="rare-input">
            <option name="normal">normal</option>
            <option name="raro">raro</option>
            <option name="muitoRaro">muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Super Trybe Trunfo
          <input
            name="superTrunfo"
            id="superTrunfo"
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

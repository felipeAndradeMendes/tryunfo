import React from 'react';
import Proptypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <fieldset className="card-preview">
        <h2 data-testid="name-card">
          { cardName }
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Attr01 .....
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Attr02 .....
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Attr03 .....
          { cardAttr3 }
        </p>
        <h3 data-testid="rare-card">
          { cardRare }
        </h3>

        {
          cardTrunfo
            ? <p data-testid="trunfo-card">Super Trunfo</p>
            : ''
        }

      </fieldset>
    );
  }
}

Card.propTypes = {
  cardName: Proptypes.string,
  cardDescription: Proptypes.string,
  cardAttr1: Proptypes.string,
  cardAttr2: Proptypes.string,
  cardAttr3: Proptypes.string,
  cardImage: Proptypes.string,
  cardRare: Proptypes.string,
  cardTrunfo: Proptypes.bool,
}.isRequired;

export default Card;

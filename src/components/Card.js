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
      <>
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
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
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

      </>
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

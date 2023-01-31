import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ButtonExcluir from './components/ButtonExcluir';
import InputFilter from './components/InputFilter';
import RareFilter from './components/RareFilter';
import SuperTrunfoFilter from './components/SuperTrunfoFilter';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    inputFilter: '',
    isDisabled: false,
    newCards: [],
  };

  cleanInputs = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  validateSuperTrunfoCheckbox = () => {
    const { newCards } = this.state;
    const result = newCards.some((card) => card.cardTrunfo === true);
    return result;
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      newCards: [...prevState.newCards, newCard],
    }), () => this.validateSuperTrunfoCheckbox(cardTrunfo));
    this.cleanInputs();
  };

  onInputchange = ({ target }) => {
    const { name, value, type, checked } = target;
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    }, () => name === 'inputFilter' && this.handleInputFilter(finalValue));
  };

  testInputs = () => {
    const max = 90;
    const maxSum = 210;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const verifyInputs = cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0;
    // console.log(verifyInputs)
    const verifyCard1 = cardAttr1 > max || cardAttr1 < 0;
    const verifyCard2 = cardAttr2 > max || cardAttr2 < 0;
    const verifyCard3 = cardAttr3 > max || cardAttr3 < 0;
    const verifySum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSum;
    // console.log('SOMA', Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
    // console.log('è maior?', cardAttr1 >= 0 && cardAttr1 <= max)
    return verifyInputs || verifyCard1 || verifyCard2 || verifyCard3 || verifySum;
  };

  handleBtnExcluirClick = ({ target }) => {
    const { name } = target;
    const { newCards } = this.state;
    // console.log('NEW CARDS:', newCards)
    const newList = newCards.filter((card) => (
      card.cardName !== name
    ));
    // console.log('NEW LIST:', newList)
    this.setState({
      newCards: newList,
    });
  };

  handleInputFilter = (value) => {
    const { newCards } = this.state;
    // console.log('VALUE RECEBIDO PELA FUNÇÃO:', value)
    // console.log('NEWCARDS:', newCards)
    // console.log('SAVED CARDS LIST', savedCardsList)
    const foundCards = newCards.filter((card) => (
      card.cardName.match(value)
    ));
    // console.log('FOUNDCARDS:', foundCards);
    this.setState({
      newCards: foundCards,
    });
  };

  handleRareFilter = ({ target }) => {
    const { value } = target;
    const { newCards } = this.state;
    const foundRareCards = value === 'todas'
      ? (newCards) : (newCards.filter((rare) => rare.cardRare === value));

    // console.log('FOUND RARE CARDS:', foundRareCards);
    this.setState({
      newCards: foundRareCards,
    });
  };

  handleSuperTrunfoFilter = ({ target }) => {
    const { checked } = target;
    const { newCards } = this.state;
    const foundTrunfos = newCards.filter((card) => (
      card.cardTrunfo
    ));
    this.setState({
      newCards: foundTrunfos,
      isDisabled: checked,
    });
  };

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
      inputFilter,
      rareFilter,
      newCards,
      isDisabled,
    } = this.state;

    return (
      <>
        <div>
          <h1 className="title">Adicione uma Carta</h1>
        </div>
        <div className="form-preview-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ this.validateSuperTrunfoCheckbox() }
            isSaveButtonDisabled={ this.testInputs() }
            onInputChange={ this.onInputchange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="input-filter">
          <InputFilter
            inputFilter={ inputFilter }
            onInputChange={ this.onInputchange }
            isDisabled={ isDisabled }
          />

          <RareFilter
            rareFilter={ rareFilter }
            onInputChange={ this.handleRareFilter }
            isDisabled={ isDisabled }
          />

          <SuperTrunfoFilter
            onInputChange={ this.handleSuperTrunfoFilter }
            // isChecked={ superTrunfoFilter }
          />
        </div>

        <div className="saved-cards">
          {newCards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <ButtonExcluir
                name={ card.cardName }
                excluirCard={ this.handleBtnExcluirClick }
              />
            </div>

          ))}
        </div>
      </>
    );
  }
}

export default App;

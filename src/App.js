import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ButtonExcluir from './components/ButtonExcluir';
import InputFilter from './components/InputFilter';

class App extends React.Component {
  //   handleSpecialCasesObj = {
  //   cardName: (value) => value,
  //   cardDescription: (value) => value,
  //   cardAttr1: (value) => value,
  //   cardAttr2: (value) => value,
  //   cardAttr3: (value) => value,
  //   cardImage: (value) => value,
  //   cardRare: (value) => value,
  //   cardTrunfo: (value) => value,
  //   btnSalvar: (value) => value,
  // }

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
    // console.log(trunfoBool)
    const { newCards } = this.state;
    // console.log(newCards)
    const result = newCards.some((card) => card.cardTrunfo === true);
    // console.log('Existe carta trunfo no array?', result)
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
    // const resultValue = this.handleSpecialCasesObj[name](value);
    const finalValue = type === 'checkbox' ? checked : value;
    // console.log(finalValue)
    // console.log('VALUEINPUTFILTER:', value)
    // console.log(name === 'inputFilter' && this.handleInputFilter(value))
    
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

    // console.log('Card1:', verifyCard1);
    // console.log('Card2:', verifyCard2);
    // console.log('Card3:', verifyCard3);
    // console.log('Inputs:', verifyInputs);
    // console.log('Soma:', verifySum);

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
    const savedCardsList = newCards;
    // console.log('SAVED CARDS LIST', savedCardsList)
    const foundCards = newCards.filter((card) =>(
      card.cardName.match(value)
    ));
    console.log('FOUNDCARDS:', foundCards)
    console.log('   ')
    this.setState({
      newCards: foundCards,
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
      newCards,
    } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
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

        <InputFilter
          inputFilter={ inputFilter }
          onInputChange={ this.onInputchange }
        />

        <div>
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

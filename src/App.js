import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    cardTrunfo: '',
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
      cardTrunfo: '',
    });
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
    } = this.state;
    const newCard = {
      cardName: cardName,
      cardDescription: cardDescription,
      cardAttr1: cardAttr1,
      cardAttr2: cardAttr2,
      cardAttr3: cardAttr3,
      cardImage: cardImage,
      cardRare: cardRare,
    }
    this.setState((prevState) => {
      // const {
      //   cardName, 
      //   cardDescription,
      //   cardAttr1,
      //   cardAttr2,
      //   cardAttr3,
      //   cardImage,
      //   cardRare,
      // } = prevState;

      // const prevCard = {
      //   cardName: cardName,
      //   cardDescription: cardDescription,
      //   cardAttr1: cardAttr1,
      //   cardAttr2: cardAttr2,
      //   cardAttr3: cardAttr3,
      //   cardImage: cardImage,
      //   cardRare: cardRare,
      // };

      // console.log('PREVCARD:', prevCard)
      // console.log('NEWCARD:', newCard )
      return {
        // newCards: prevCard.newCards
        //   ? [...prevState.newCards, newCard] 
        //   : [newCard],
        newCards: [...prevState.newCards, newCard],
      }
    });
    this.cleanInputs();
  }

  onInputchange = ({ target }) => {
    const { name, value } = target;
    // const resultValue = this.handleSpecialCasesObj[name](value);
    this.setState({
      [name]: value,
    });
    // this.testInputs();
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
      // btnSalvar,
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
          hasTrunfo
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
      </>
    );
  }
}

export default App;

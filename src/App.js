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
    // btnSalvar: false,
  };

  onInputchange = ({ target }) => {
    const { name, value } = target;
    // const resultValue = this.handleSpecialCasesObj[name](value);
    this.setState({
      [name]: value,
    });
    // this.testInputs();
  };

  testInputs = () => {
    // console.log('CARD NAME:', cardName.value);
    const max = 90;
    const maxSum = 210;
    // if (cardName.value.length === 0) return true;
    // if (cardDescription.value.length === 0) return true;
    // if (cardImage.value.length === 0) return true;
    // if (cardAttr1.value + cardAttr2.value + cardAttr3 > maxSum) return true;
    // if (cardAttr1.value > max || cardAttr1.value < 0) return true;
    // if (cardAttr2.value > max || cardAttr1.value < 0) return true;
    // if (cardAttr3.value > max || cardAttr1.value < 0) return true;
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
    const verifyNumbers = cardAttr1 < max || cardAttr1 > 0
    || cardAttr2 < max || cardAttr2 > 0
    || cardAttr3 < max || cardAttr3 > 0
    || cardAttr1 + cardAttr2 + cardAttr3 < maxSum;
    return verifyInputs && verifyNumbers;
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
          onSaveButtonClick
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

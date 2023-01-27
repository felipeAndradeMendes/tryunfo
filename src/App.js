import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: 0,
  //   cardAttr2: 0,
  //   cardAttr3: 0,
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: false,
  //   btnSalvar: false,
  // }
  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   btnSalvar,
    // } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName
          cardDescription
          cardAttr1
          cardAttr2
          cardAttr3
          cardImage
          cardRare
          cardTrunfo
          hasTrunfo
          isSaveButtonDisabled
          onInputChange
          onSaveButtonClick
        />

        <Card
          cardName
          cardDescription
          cardAttr1
          cardAttr2
          cardAttr3
          cardImage
          cardRare
          cardTrunfo
        />
      </>
    );
  }
}

export default App;

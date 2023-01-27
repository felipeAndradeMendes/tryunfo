import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,  
    btnSalvar: false,
  }
  render() {


    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form 

        />
      </>
    );
  }
}

export default App;

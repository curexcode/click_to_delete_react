import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    input : '',
    length: 0,
    charList: []
  };

  onCharClickHandler = (event, id) =>{

    console.log(id);
    let newState = [...this.state.charList];
    let charClickedIndex = newState.findIndex( charObj => charObj.id === id);
    newState.splice(charClickedIndex, 1);
    
    let newInput = this.state.input.split('').splice(charClickedIndex, 1);

    console.log(newInput);
    this.setState({input: newInput.join(''), charList: newState});
    
  }
  
  onChangeHandler = (event, inputLength) => {
   // console.log(inputLength, this.state.length);
    let value = event.target.value;
    let charArray = value.split('');

    let cList = charArray.map( (c, index) => {
        index +=1;
        return {id: index, char: c};
    })

    this.setState({
      input: value,
      length: inputLength,
      charList: cList
    });
    console.log(cList);
  }

    render(){
    let length = this.state.length;
    //let charArray = this.state.input.split('');
    
    let charArray = this.state.charList;
    let charComponentList = (
          <div>
              {charArray.map( charObj => {
                  return <CharComponent 
                  char={charObj.char} 
                  key={charObj.id} 
                  clicked={(event) => this.onCharClickHandler(event, charObj.id)}></CharComponent>
              })}
          </div>
     );

  //   console.log('charArray = ', charArray);
  //   console.log('charComponentList = ', charComponentList);



    return (
         <div className="App">
             <InputField 
             text={this.state.input}
             changed={(event) => this.onChangeHandler(event, length)} 
             inputLength={this.state.length}></InputField>
             <ValidationComponent textLength={this.state.length}></ValidationComponent>
             {charComponentList}
         </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component { // inherit Component obj

  state =  { // use to track data,
    persons: [ // update as needed
      {name: "Roger", age: "28"},
      {name: "Brad", age: "29"},
      {name: "Jim", age: "27"},
    ],
    showPersons: false,
  }
  
  switchNameHandler = (newName) => {
    console.log('Clicked!');
    // ALWAYS mutate state with .setState()
    // setState is a method from Component Object
    this.setState({
      persons: [ 
        {name: newName, age: "28"},
        {name: "Brad", age: "29"},
        {name: "Jim", age: "27"},
      ]    
    });
  }

  togglePersonsHandler = () => {

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [ 
        {name: 'Roger', age: "28"},
        {name: event.target.value, age: "29"},
        {name: "Jim", age: "27"},
      ]    
    });
  }

  render() {

    const style = {
      // use camelCase for properties for inline styling
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hello World!!!!!!</h1>
        <p>Lorem ipsum lorem lorem lorem</p>
        {/* reference the function, do NOT call ie '()' */}
        {/* bind to this, so as to define 'this' when the function is called, NOT defined */}
        <button 
          style={style} /* pass style obj to style element */
          onClick={this.togglePersonsHandler}>Switch Name</button> {/* use this keyword because App is an Object */}
        {this.state.showPersons ? // check if true
        <div>
          <Person
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            // alternative, calling anon arrow function, return function call, no need bind
            click={() => this.switchNameHandler('Bob!!')}>I like turtles.</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.nameChangedHandler} />
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div> : null // else dont render
        }
        
      </div>      
    );

    // is compiled to this...
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!!!'));
  }
}

export default App;

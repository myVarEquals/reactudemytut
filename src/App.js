import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { // inherit Component obj

  state =  { // use to track data,
    persons: [ // update as needed
      {name: "Roger", age: "28"},
      {name: "Brad", age: "29"},
      {name: "Jim", age: "27"},
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hello World!!!!!!</h1>
        <p>Lorem ipsum lorem lorem lorem</p>
        {/* reference the function, do NOT call ie '()' */}
        {/* bind to this, so as to define 'this' when the function is called, NOT defined */}
        <button onClick={this.switchNameHandler.bind(this, 'Bob')}>Switch Name</button>
        {/* use this keyword because App is an Object */}
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          // alternative, calling anon arrow function, return function call, no need bind
          click={() => this.switchNameHandler('Bob!!')}>I like turtles.</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>      
    );

    // is compiled to this...
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!!!'));
  }
}

export default App;

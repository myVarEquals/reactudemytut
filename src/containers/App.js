import React, { Component } from 'react';
import myStyles from './App.css'; // import CSS as object
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component { // inherit Component obj

  state =  { // use to track data,
    persons: [ // update as needed
      {id: 'egwg', name: "Roger", age: "28"},
      {id: 'welgj', name: "Brad", age: "29"},
      {id: 'wreoigj', name: "Jim", age: "27"},
    ],
    showPersons: false,
  }
  
  // switchNameHandler = (newName) => {
  //   console.log('Clicked!');
  //   // ALWAYS mutate state with .setState()
  //   // setState is a method from Component Object
  //   this.setState({
  //     persons: [ 
  //       {name: newName, age: "28"},
  //       {name: "Brad", age: "29"},
  //       {name: "Jim", age: "27"},
  //     ]    
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    // this creates a new object, do NOT mutate state directly!
    // const persons = this.state.persons.slice(); old way
    const persons = [...this.state.persons]; // ES6 spread
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // if false, set true, and vice versa
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    // find the person from state who's id matches the one were
    // editing in the input field
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // copy original person, do NOT mutate original state
    const person = {
      ...this.state.persons[personIndex]
    };
    // update copy with new value
    person.name = event.target.value;
    // copy original array of persons
    const persons = [...this.state.persons];
    // update element in array matching our id
    persons[personIndex] = person;
    // push new state
    this.setState({
      persons: persons   
    });
  }

  render() {

    // best practice for conditionally rendering content
    let persons = null;
    let btnClass = null;
    if(this.state.showPersons) {
      // if true, populate persons variable, else dont
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>
      )

      btnClass = myStyles.red;
      
    }

    const classes = [];
    // push class names to be passed to html elements
    if (this.state.persons.length <= 2) {
      classes.push(myStyles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(myStyles.bold);
    }

    return (
        // add style to element. it will have a unique name with a random hash (CSSmodules)
        <div className={myStyles.App}> 
          <h1>Hello World!!!!!!</h1>
          <p className={classes.join(' ')} >Lorem ipsum lorem lorem lorem</p>
          {/* reference the function, do NOT call ie '()' */}
          {/* bind to this, so as to define 'this' when the function is called, NOT defined */}
          <button /* pass style obj to style attribute */
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle List</button> {/* use this keyword because App is an Object */}
          {persons}  
        </div> 
    );

    // is compiled to this...
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!!!'));
  }
}

export default App;

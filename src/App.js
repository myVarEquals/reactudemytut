import React, { Component } from 'react';
import myStyles from './App.css'; // import CSS as object
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

    // best practice for conditionally rendering content
    let persons = null;
    let btnClass = null;
    if(this.state.showPersons) {
      // if true, populate persons variable, else dont
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
            })
          }
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

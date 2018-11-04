import React from 'react'; // need for JSX
import myStyles from './Person.css'; // import css

// use stateless components as often as possible
const person = (props) => { // use props to pass data to child elements/components   

    return ( // return JSX to be rendered in DOM
        <div className={myStyles.Person}> {/* assign classes with className tag */}
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p> {/* gets data from between call for component between closing/opening tags */}
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;
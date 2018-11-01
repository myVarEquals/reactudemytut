import React from 'react'; // need for JSX


// use stateless components as often as possible
const person = (props) => { // use props to pass data to child elements/components
    return (
        <div>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p> {/* gets data from between call for component between closing/opening tags */}
        </div>
    );
}

export default person;
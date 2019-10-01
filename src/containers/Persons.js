import React, { Component } from 'react';
import { connect } from 'react-redux';
import random_name from 'node-random-name';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAdd} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDel(person.id)}/>
                ))}
            </div>
        );
    }
}

const stateToProps = state => {
    return { persons: state.persons }
}

const methods = dispatch => {
    return {
        onAdd : () => dispatch({type: "ADD_PERSON", name: random_name()}),
        onDel : (id) => dispatch({type: "REMOVE_PERSON", id: id})
    }
}

export default connect(stateToProps, methods)(Persons);
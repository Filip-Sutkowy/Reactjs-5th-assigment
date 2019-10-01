const initialState = {
	persons : []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_PERSON" :
			return {
				persons: state.persons.concat({id: Math.random(), name: action.name, age: Math.floor(Math.random() * 40)})
			}
		case "REMOVE_PERSON" :
			return {
				persons: state.persons.filter(person => person.id !== action.id)
			}
	}

	return state;
}

export default reducer;
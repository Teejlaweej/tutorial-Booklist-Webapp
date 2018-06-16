//reducers only called when action occurs
//parameter state, is not application state, but the state this reducer is responsible for
//same state being passed through
export default function (state = null, action) {
  
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}

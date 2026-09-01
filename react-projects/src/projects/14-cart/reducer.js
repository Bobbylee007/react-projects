const reducer = (state,action)=>{
    // you switch or if statement for reducer function
    if(action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }

    return state
}

export default reducer
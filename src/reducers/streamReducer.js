import _ from 'lodash';
import { createStream, editStream, deleteStreams, fetchStream, fetchStreams } from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        
        case 'FETCH_STREAMS':
            return {...state, ..._.mapKeys(action.payload, 'id' )}

        case 'FETCH_STREAM':
            //take the state object and add the new key value pair to create a new object key is [action.payload.id] value is action.payload.
            return {...state, [action.payload.id]: action.payload }
        case 'CREATE_STREAM':
            return {...state, [action.payload.id]: action.payload }
            
        case 'EDIT_STREAM':
            return {...state, [action.payload.id]: action.payload }
        
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
        default: 
            return state;
    }
}

//lecture 347
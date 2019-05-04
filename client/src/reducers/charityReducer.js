import  { FETCH_CHARITY} from "../actions/types";

// whe we boot up surveys piece of state will be an empty array
// but once we finish request to get our list of surveys, [] will be an array of
// all  the surveys in it

// with state here:  what is the charity route returning?
// should be returning an array with the different
// charities the user has contributed to, and the amount.
// So this should be ann array in the end!!!!!
export default function(state = [], action){
    switch (action.type){
        case FETCH_CHARITY:
            return action.payload;
        default:
            return state;
    }
}
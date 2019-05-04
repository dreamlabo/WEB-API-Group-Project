import  { FETCH_SURVEYS} from "../actions/types";

// whe we boot up surveys piece of state will be an empty array
// but once we finish request to get our list of surveys, [] will be an array of
// all  the surveys in it
export default function(state = [], action){
    switch (action.type){
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}
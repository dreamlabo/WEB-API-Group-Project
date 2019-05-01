import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = ()  =>  async dispatch => {    // can use because we have single argument in body
                                                        // Implies "return function(dispatch)
     const res = await axios.get('/api/current_user')

     dispatch({ type: FETCH_USER, payload: res.data });
    };



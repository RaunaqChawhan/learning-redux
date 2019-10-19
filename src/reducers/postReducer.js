//This is where it is going to evaluate any actions that are committed. any actions such as fetching a post and creating a new post

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],  //items array for the posts that returns from action. action where we will put fetch request
    item: {}    //single post that we add and we get response back which will go in there
}

//Now, we need function which evaluates what type we are dealing with
export default function(state = initialState, action) { //takes in two parameters, state = initial state and action - action will include a type
                            // it has to have a type and that's what we are evaluating. we can do it in different ways
                            //common way is to use switch
                            //action is an object. it will have a type. type will be one of (FETCH_POSTS, NEW_POST)
                            //if it includes data, it will also have a payload. we can add other stuffs as well but it has to have a type
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }

}
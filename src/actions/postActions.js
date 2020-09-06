import { FETCH_POSTS, NEW_POST } from './types';

//each action or action creator is going to be a function that we need to export

/*
export function fetchPosts() {
    //thunk middleware allows us to actually use or call dispatch function directly so that we can make asynchronous requests
    return function(dispatch) {
        //we can think of dispatch as a resolver in a promise. whenever we want to send data we call dispatch just like in promise
        // we'd call resolve and pass in whatever we need to pass. type and payload if there's any data will be sent by dispatch
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
}   */

//ES6 syntax
export const fetchPosts = () => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPost = postData => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => 
            dispatch({
                type: NEW_POST,
                payload: post
            })
        );
};
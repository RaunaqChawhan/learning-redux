import * as actions from './postActions';
import * as types from './types';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('checks the async action creators', () => {

    it('creates FETCH_POSTS when fetching posts has been done', () => {
        fetchMock.mock('https://jsonplaceholder.typicode.com/posts', {
            body: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            }
        });
        const expectedActions = [
            { type: types.FETCH_POSTS, payload: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            } }
        ];
        const store = mockStore();
        
        return store.dispatch(actions.fetchPosts()).then(() => {
            console.log(store.getActions());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
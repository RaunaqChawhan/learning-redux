import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostForm from './PostForm';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();

configure({ adapter: new Adapter() });
const store = mockStore({});

const shallowWrapper = shallow(
<Provider store={store}>
    <PostForm />
</Provider>);
const deepWrapper = mount(
    <Provider store={store}>
        <PostForm />
    </Provider>);;

describe('tests the component', () => {
    it('checks the shallow mount', () => {
        expect(shallowWrapper).toBeTruthy();
    });
});

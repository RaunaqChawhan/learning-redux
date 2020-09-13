import React from 'react';
import PostForm from './PostForm';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

const mockStore = configureStore();
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
    it('checks the deep mount', () => {
        // console.log(deepWrapper.find("PostForm").instance());
        expect(deepWrapper.find("PostForm").instance()).not.toBeNull();
    });

    it('checks the state is changed on simulating the onChange function', () => {
        deepWrapper.find("PostForm").find('input').simulate('change', { target: { name: 'title', value: "sample"}});
        console.log(deepWrapper.find("PostForm").state().title);
        expect(deepWrapper.find("PostForm").state().title).toMatch('sample');
    });
});
import React from 'react';
import CommentsList from '../features/Comment/CommentsList';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const store = configureStore([]);

describe('CommentsList component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store()}>
                <CommentsList />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
});

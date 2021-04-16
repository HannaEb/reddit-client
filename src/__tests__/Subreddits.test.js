import React from 'react';
import Subreddits from '../features/Subreddits/Subreddits';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const store = configureStore([]);

describe('Subreddits component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store()}>
                <Subreddits />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
});

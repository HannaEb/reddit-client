import React from 'react';
import Feed from '../features/Feed/Feed';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const store = configureStore([]);

describe('Feed component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store()}>
                <Feed />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
});

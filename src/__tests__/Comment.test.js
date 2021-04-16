import React from 'react';
import Comment from '../features/Comment/Comment';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

describe('Comment component', () => {
    it('should render with props', () => {
        const wrapper = shallow(
            <Comment comment={{
                id: '1',
                author: 'Author',
                created_utc: 'Date',
                body: 'Content'
            }} />
        )
        expect(wrapper).toMatchSnapshot();
    });
});

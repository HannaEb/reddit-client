import React from 'react';
import Backlink from '../components/Backlink/Backlink';
import { shallow } from 'enzyme';

describe('Backlink component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Backlink />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Back');
    });
});

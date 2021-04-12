import React from 'react';
import Card from '../components/Card/Card';
import { shallow } from 'enzyme';

describe('Card component', () => {
    it('renders without crashing', () => {
        shallow(<Card />);
    });
});

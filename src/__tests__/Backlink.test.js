import React from 'react'
import Backlink from '../components/Backlink/Backlink'
import { Link } from 'react-router'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import { SiExpertsexchange } from 'react-icons/si'
import { ImTab } from 'react-icons/im'
import { render } from '@testing-library/react';

// it('renders a link to the homepage', () => {
//     const wrapper = shallow(<MemoryRouter><Backlink /></MemoryRouter>);
//     expect(wrapper('Back')).toBeInTheDocument();
//     // expect(wrapper.find('Link').props().to).toBe('/');
// });

it('renders a link', () => {
    const { getByText } = render(<MemoryRouter><Backlink /></MemoryRouter>)
    expect(getByText('Back')).toBeInTheDocument();
})

// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { shallow } from 'enzyme';
// import store from '../../app/store';
// import Header from './Header';


// it('renders without crashing', () => {
//     shallow(<Header />);
// });

// it('renders the title', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <Header />
//     </Provider>
//   );

//   expect(getByText('reddit client')).toBeInTheDocument();
// });
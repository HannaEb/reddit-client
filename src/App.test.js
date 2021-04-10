import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from './app/store';
import App from './App';

it('renders without crashing', () => {
    shallow(<App />);
});

// it('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText('Subreddits')).toBeInTheDocument();
// });

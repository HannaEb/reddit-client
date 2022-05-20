import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('App component', () => {

  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'Test',
    });

    component = renderer.create(
      <Provider store={store}>
        <App />
        </Provider>
    );
  });

  it('matches the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  })

    // it('matches the snapshot', () => {
    //     // const tree = renderer.create(<App />).toJSON();
    //     let store = mockStore({
    //       myState: 'Test',
    //     });
    //     store.dispatch = jest.fn();
    //     const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});

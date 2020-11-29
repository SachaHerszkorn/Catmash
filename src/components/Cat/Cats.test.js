import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Cats from './Cats';
import CatBlock from './CatBlock';

const mockStore = configureStore([]);

describe('Testing cats', () => {
  let store;
  let testRenderer;
  let testInstance;

  beforeEach(() => {
    store = mockStore({
      cats: {
        list: [
          {
            url:
              'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
            _id: 'test1',
            score: 0,
          },
        ],
        listIds: ['MTgwODA3MA'],
      },
    });
    testRenderer = renderer.create(
      <Provider store={store}>
        <Cats />
      </Provider>,
    );
    testInstance = testRenderer.root;
  });

  it('should render cats with one cat', () => {
    expect(testInstance.findByType(CatBlock)).not.toBeUndefined();
  });
});

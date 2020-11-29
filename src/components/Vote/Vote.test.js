import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import axios from 'axios';

import Vote from './Vote';
import VoteBlock from './VoteBlock';

const mockStore = configureStore([]);
const { act } = TestRenderer;

jest.mock('axios');

describe('Testing Vote', () => {
  let store;
  let testRenderer;
  let testInstance;

  it('should render vote with 2 cats', async () => {
    store = mockStore({
      cats: {
        list: [],
        listIds: [],
      },
    });

    const data = {
      data: [
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test1',
          score: 0,
        },
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test2',
          score: 0,
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await act(async () => {
      testRenderer = TestRenderer.create(
        <Provider store={store}>
          <Vote />
        </Provider>,
      );
    });
    testInstance = testRenderer.root;
    expect(testInstance.findAllByType(VoteBlock)).toHaveLength(2);
  });

  it('should render vote with 3 cats', async () => {
    store = mockStore({
      cats: {
        list: [],
        listIds: [],
      },
    });

    const data = {
      data: [
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test1',
          score: 0,
        },
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test2',
          score: 0,
        },
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test3',
          score: 0,
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await act(async () => {
      testRenderer = TestRenderer.create(
        <Provider store={store}>
          <Vote />
        </Provider>,
      );
    });
    testInstance = testRenderer.root;
    expect(testInstance.findAllByType(VoteBlock)).toHaveLength(3);
  });

  it('should vote for a cat successfully', async () => {
    store = mockStore({
      cats: {
        list: [],
        listIds: [],
      },
    });

    const data = {
      data: [
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test2',
          score: 0,
        },
        {
          url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
          _id: 'test3',
          score: 0,
        },
      ],
    };
    const postData = {
      url: 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
      _id: 'test2',
      score: 0,
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    axios.post.mockImplementationOnce(() => Promise.resolve(postData));

    await act(async () => {
      testRenderer = TestRenderer.create(
        <Provider store={store}>
          <Vote />
        </Provider>,
      );
    });
    testInstance = testRenderer.root;
    await act(async () => {
      testInstance
        .findAllByType(VoteBlock)[0]
        .findByType('button')
        .props.onClick();
    });
    expect(testInstance.findAllByType(VoteBlock)[0].props.hasVoted).toBe(0);
  });
});

import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
    targets: [
      {
        "id": 1,
        "name": "Sprint",
        "description": "American telecommunications company",
        "location": "Overland Park, Kansas",
        "status": "pending approval",
        "contact": "John Smith",
        "valuation": "25.5B",
        "liquidity": "1.16",
        "EBITDA": "13.13B"
      },
      {
        "id": 2,
        "name": "Fox Corporation",
        "description": "American television broadcasting company",
        "location": "New York City, New York",
        "status": "declined",
        "contact": "Alan Jackson",
        "valuation": "71B",
        "liquidity": "3.17",
        "EBITDA": "2.54B"
      },
      {
        "id": 3,
        "name": "Coca-Cola Co",
        "description": "American multinational corporation",
        "location": "Atlanta, Georgia",
        "status": "researching",
        "contact": "Brian Jefferson",
        "valuation": "204B",
        "liquidity": "1.05",
        "EBITDA": "10.72B"
      }
    ]
  };

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
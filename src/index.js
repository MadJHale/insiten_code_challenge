import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import rootReducer from './reducers'
import { reduxForm } from 'redux-form'

const initialState = {
    companies: [
      {
        "id": 1,
        "name": "Sprint",
        "description": "American telecommunications company",
        "location": "Overland Park, Kansas",
        "status": "pending approval",
        "contacts": "John Smith",
        "finances": {
          "valuation": "25.5B",
          "liquidity": "1.16",
          "EBITDA": "13.13B"
        }
      },
      {
        "id": 2,
        "name": "Fox Corporation",
        "description": "American television broadcasting company",
        "location": "New York City, New York",
        "status": "declined",
        "contacts": "Alan Jackson",
        "finances": {
          "valuation": "71B",
          "liquidity": "3.17",
          "EBITDA": "2.54B"
        }
      },
      {
        "id": 3,
        "name": "Coca-Cola Co",
        "description": "American multinational corporation",
        "location": "Atlanta, Georgia",
        "status": "researching",
        "contacts": "Brian Jefferson",
        "finances": {
          "valuation": "204B",
          "liquidity": "1.05",
          "EBITDA": "10.72B"
        }
      }
    ]
  };

const store = createStore(rootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
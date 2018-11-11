import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from './createStore'
import manageBand from './reducers/manageBand'
import { Provider } from 'react-redux';

const store = createStore(manageBand)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />,      
    </Provider>,
     document.getElementById('root')
    
  );
};

// not directly exporting the render function
// because need to stub it out in tests.
export const renderer = { render };

store.dispatch({ type: '@@init' });


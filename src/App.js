import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';

import { rootReducer } from './store/reducers/reducer';
import { CounterContainer } from './containers/CounterContainer';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Main>
          <CounterContainer />
        </Main>
      </Provider> 
    );
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App;

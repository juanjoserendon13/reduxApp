import React, { Component } from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';

import configureStore from './store/configStore';
import initialState from './reducers/initialState';

const store = configureStore(initialState);

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_TEST);
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

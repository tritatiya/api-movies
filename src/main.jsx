import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import App from './App'
import './index.css'
import { searchReducer } from './reducers/searchReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { moviesReducer } from './reducers/moviesReducer'
import { statusReducer } from './reducers/statusReducer'

const middlewares = [thunk]

const store = createStore(
  combineReducers({
    search: searchReducer,
    movies: moviesReducer,
    status: statusReducer
  }), composeWithDevTools(applyMiddleware(...middlewares)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

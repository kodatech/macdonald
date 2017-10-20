import React, { Component } from 'react'
import { Scene, Router, Stack, ActionConst } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import CategoriesScene from './scenes/categoriesScene'
import ProductsScene from './scenes/productsScene'

import ProductImage from './scenes/productImage'


import Main from './scenes/Main'


const styles = {
  navBar: {
    backgroundColor: '#546e7a',
    height: 60,
  },
  title: {
    color: 'white',
  },
  leftButton: {
    tintColor: 'white',
  },
  rightButton: {
    color: 'white',
  },
}

/** This is a description of the AppContainer class. */
export default class AppContainer extends Component {

  /**
  *This is a description of the componentDidMount function.
  *@return {Router}  element- .
  */
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router>
          <Stack key='root'>
            <Scene key='main' component={Main} title='Main' hideNavBar />
            <Scene key='categories' component={CategoriesScene} title='Categories' />
            <Scene key='products' component={ProductsScene} title='Products' hideNavBar />
            <Scene key='productImage' component={ProductImage} title='Product Image' />

          </Stack>
        </Router>
      </Provider>
    )
  }
}

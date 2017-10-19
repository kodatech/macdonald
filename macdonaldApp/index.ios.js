/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react'
 import {
   AppRegistry,
 } from 'react-native'
 import AppContainer from './app/AppContainer'

 /** This is a description of the MacdonaldApp class. */
 export default class MacdonaldApp extends Component {
     /**
     *This is a description of the componentDidMount function.
     *@return {AppContainer} dataSource - The title of the book.
     */
   render() {
     return (
       <AppContainer />
     )
   }
 }

 AppRegistry.registerComponent('macdonaldApp', () => MacdonaldApp)

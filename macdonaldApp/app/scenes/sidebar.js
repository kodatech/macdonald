import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import {Content} from 'native-base'

import Categories from './categories'

/** This is a description of the ProductScene class. */
export default class Sidebar extends Component {

  /**
  *Description of the componentWillMount function.
  *@return {Content} - Categories
  */
  render() {
    return (
      <Content style={{backgroundColor: '#FFFFFF', paddingLeft: 10}}>
        <View style={{paddingTop: 80}}>
          <View><Text>Categories</Text></View>
          <Categories />
          <View style={{paddingTop: 40}}><Text
            onPress={() => {
              Actions.products({type: 'replace'})
            }}>All Products</Text></View>
          <View style={{paddingTop: 40}}><Text>All Categories</Text></View>
          <View style={{paddingTop: 40}}><Text>Latest News</Text></View>
          <View style={{paddingTop: 40}}><Text>Contact Us</Text></View>
        </View>
      </Content>
    )
  }
}

module.exports = Sidebar

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import {Header, Left, Button, Icon, Right, Body, Title} from 'native-base'

/** This is a description of the AppHeader class. */
export default class AppHeader extends Component {

  /**
  *This is a description of the render function.
  *@return {Header} - Header of the app
  */
  render() {
    return (
      <Header style={{backgroundColor: 'red'}}>
        <Left>
          <Button transparent
            onPress={
              () => this.props.openDrawer()
            }
          >
            <Icon style={{color: 'white', fontSize: 30}} name='menu' />
          </Button>
        </Left>
        <View>
          <Text style={{fontSize: 13, color: 'white', paddingTop: 20}}>{this.props.title}</Text>
        </View>
        <Right>
          <Button transparent>
            <Icon style={{color: 'white', fontSize: 30}} name='search' />
          </Button>
        </Right>
      </Header>
    )
  }
}

module.exports = AppHeader

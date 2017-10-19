import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import {Header, Left, Button, Icon, Right, Body, Title, Footer, FooterTab} from 'native-base'

/** This is a description of the AppHeader class. */
export default class FooterMacDonald extends Component {

  /**
  *This is a description of the render function.
  *@return {Footer} - Footer of the app
  */
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name='home' />
          </Button>
          <Button>
            <Icon name='ios-water' />
          </Button>
          <Button active>
            <Icon active name='paper' />
          </Button>
          <Button>
            <Icon name='mail' />
          </Button>
          <Button>
            <Icon name='settings' />
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

module.exports = FooterMacDonald

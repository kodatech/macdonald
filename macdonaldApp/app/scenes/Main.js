import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import {Drawer} from 'native-base'


import AppHeader from './appHeader'

import Sidebar from './sidebar'

import Products from './products'

import FooterMacDonald from './footer'

/** This is a description of the Main class. */
export default class Main extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  /**
  *This is a description of the render function.
  *@return {View} - The title
  */
  render() {

    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref
        }}

        content={<Sidebar />}
        // onClose={() => this.closeDrawer()}
        >
        <AppHeader
          openDrawer={this.openDrawer.bind(this)}
          title={'Products'}
        />
        <Products />
        <FooterMacDonald />
      </Drawer>
    )
  }
}

module.exports = Main

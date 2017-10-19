import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
  Image,
} from 'react-native'
import { connect } from 'react-redux'
import { getProductList } from '../actions'

import {Drawer} from 'native-base'


import AppHeader from './appHeader'

import FooterMacDonald from './footer'

import Sidebar from './sidebar'

import Products from './products'


/** This is a description of the ProductScene class. */
class ProductsScene extends Component {

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
          title={this.props.products[0].Category}
        />
        <Products />
        <FooterMacDonald />
      </Drawer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    // marginBottom: 5,
  },
})

const mapStateToProps = state => {
  console.log(state)
  return {
    loadingProducts: state.product.loading,
    products: state.product.productlist,
  }
}

export default connect(mapStateToProps, {getProductList})(ProductsScene)

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { connect } from 'react-redux'
import { getProductList } from '../actions'
import {Header, Left, Button, Icon, Right, Body, Title, Card, CardItem, DeckSwiper} from 'native-base'

import Swiper from 'react-native-swiper'

// import ListItem from './listItem'

/** This is a description of the ProductScene class. */
class ProductImage extends Component {

  /**
  *This is a description of the componentWillMount function.
  */
  componentWillMount() {
    // console.log(this.props)
    this.props.getProductList(this.props.selected, 'All')
    this.createDataSource(this.props)
  }

  /**
  *This is a description of the componentWillMount function.
  * @param {object} nextProps - The title of the book.
  */
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    this.createDataSource(nextProps)
  }

  /**
  *This is a description of the createDataSource function.
  * @param {object} products - The title of the book.
  */
  createDataSource({ products }) {
    // console.log(categories)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.dataSource = ds.cloneWithRows(products)
  }

  /**
  *This is a description of _onPressButton function.
  * @param {int} id - The id of the product.
  */
  _onPressButtonProduct(id) {
    // console.log(id)
    this.props.getProductList(undefined, id)
    // console.log(this.props)
    // this.createDataSource(this.props)
  }

  /**
  *This is a description of _onPressButton function.
  * @param {int} id - The id of the category.
  */
  _onPressButtonBack(id) {
    // console.log(id)
    this.props.getProductList(this.props.selected, 'All')
    // console.log(this.props)
    // this.createDataSource(this.props)
  }

  /**
  *This is a description of the getButton function.
  * @param {object} rowData - Product row.
  *@return {TouchableOpacity} - Button to particular product
  */
  getButton(rowData) {
    if (this.props.products.length > 1) {
      return (<TouchableOpacity onPress={this._onPressButtonProduct.bind(this, rowData.Code)}>
        <Text>Go to product</Text>
      </TouchableOpacity>)
    } else {
      return (<TouchableOpacity onPress={this._onPressButtonBack.bind(this, rowData.Code)}>
        <Text>Go to previous list</Text>
      </TouchableOpacity>)
    }
  }

  /**
  *This is a description of the getButton function.
  * @param {object} product - Product row.
  *@return {View} - Button to particular product
  */
  // renderRow(product) {
  //   // return <ListItem product={product} />
  //   return (
  //     <View style={{paddingTop: 20}}>
  //       <Text>{product.Title}</Text>
  //       <Text>{product.Code}</Text>
  //       {
  //         this.getButton(product)
  //       }
  //       <View><Image
  //         style={{width: 200, height: 200}}
  //         source={{uri: `http://macdonald.benjamin.sky/sites/default/files/styles/thumbnail/public/${product.field_product_image[0]}`}}
  //         // source={{uri: `http://macdonald.benjamin.sky/sites/default/files/styles/thumbnail/public/Multi-Shower-WA-SH-schematic_LoRes.jpg`}}
  //         // source={rowData.img[0]}
  //       /></View>
  //       <Text>{product.Body}</Text>
  //     </View>
  //   )
  // }

  /**
  *This is a description of _onPressButton function.
  * @param {string} image - Name of the image.
  */
  _onPressButton(image) {
    console.log(image)
  }

  /**
  *This is a description of the getButton function.
  * @param {Array} images - Images Array.
  *@return {View} - Button to particular product
  */
  renderImages(images) {
    console.log(images)
    return _.map(images, (image) => {
      return <TouchableWithoutFeedback key={image} onPress={this._onPressButton.bind(this, image)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: 'http://macdonald.benjamin.sky/sites/default/files/styles/products/public/' + image}}
            style={{width: 250, height: 250}} />
        </View>
      </TouchableWithoutFeedback>
    })
  }

  /**
  *This is a description of the render function.
  *@return {View} - The title
  */
  render() {
    if (this.props.loadingProducts) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        // renderRow={this.renderRow}
        renderRow={(rowData) =>
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                {this.getButton(rowData)}
              </Left>
            </CardItem>
            <Swiper style={{height: 400}}>
              {this.renderImages(rowData.Images)}
            </Swiper>
            <CardItem>
              <Left>
                <Title style={{fontSize: 13}}>{rowData.Title}</Title>
              </Left>
            </CardItem>
            <CardItem style={{paddingTop: 0}}>
              <Left>
                <Text note>{rowData.Code}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Overview</Text>
              </Left>
              <Body>
                <Text>Models</Text>
              </Body>
              <Right>
                <Text>Downloads</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{rowData.Body}</Text>
              </Body>
            </CardItem>
          </Card>
        }
      />
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
    marginBottom: 5,
  },
})

const mapStateToProps = state => {
  console.log(state)
  return {
    loadingProducts: state.product.loading,
    products: state.product.productlist,
    selected: state.category.selected,
    idCategory: state.product.idCategory,
  }
}

export default connect(mapStateToProps, {getProductList})(ProductImage)

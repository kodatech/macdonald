
import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'

/** This is a description of the ListItem class. */
class ListItem extends Component {

  /**
  *This is a description of the render function.
  *@return {View} - Button to particular product
  */
  render() {
    console.log(this.props.product)
    const { Title } = this.props.product
    const { Code } = this.props.product
    // const { img } = product.field_product_image[0]

    return (
      <View style={{paddingTop: 20}}>
        <Text>{Title}</Text>
        <Text>{Code}</Text>
        {
          // this.getButton(product)
        }
        <View><Image
          style={{width: 200, height: 200}}
          // source={{uri: `http://macdonald.benjamin.sky/sites/default/files/styles/thumbnail/public/${img}`}}
          // source={{uri: `http://macdonald.benjamin.sky/sites/default/files/styles/thumbnail/public/Multi-Shower-WA-SH-schematic_LoRes.jpg`}}
          // source={rowData.img[0]}
        /></View>
        <Text>{product.Body}</Text>
      </View>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
}

export default ListItem

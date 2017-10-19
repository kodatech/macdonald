import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { getCategoryList, getProductList } from '../actions'
import {Header, Left, Button, Icon, Right, Body, Title} from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'


// import ListItem from './ListItem'

/** This is a description of the ProductScene class. */
class Categories extends Component {

  /**
 * Represents state.
 * @constructor
 * @param {string} props - The title of the book.
 */
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isLoading: true,
  //   }
  // }

  /**
  *This is a description of the componentWillMount function.
  * @param {int} id - Id Category.
  */
  componentWillMount(id) {
    this.props.getCategoryList('0', '0')
    this.createDataSource(this.props)
  }

  /**
  *This is a description of the componentWillMount function.
  * @param {object} nextProps - The title of the book.
  */
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
    if (nextProps.end) {
      // console.log(nextProps)
      Actions.pop()
      this.props.getProductList(nextProps.selected, 'All')
      Actions.products()
    }
  }

  /**
  *This is a description of the createDataSource function.
  * @param {object} categories - The title of the book.
  */
  createDataSource({ categories }) {
    // console.log(categories)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.dataSource = ds.cloneWithRows(categories)
  }

  /**
  *This is a description of _onPressButton function.
  * @param {int} id - The id of the category.
  * @param {int} idPrev - The id of previous category.
  */
  _onPressButton(id, idPrev) {
    this.props.getCategoryList(id, idPrev)
    this.createDataSource(this.props)
  }

  /**
  *This is a description of the render function.
  *@return {View} - The title
  */
  render() {
    if (this.props.loadingCategories) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity
              onPress={this._onPressButton.bind(this, rowData.id, rowData.parent_id)}>
              <Text>{rowData.name}, {rowData.id}, {rowData.parent_id}</Text>
            </TouchableOpacity>
          }
        />
      </View>
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
  // console.log(state)
  return {
    loadingCategories: state.category.loading,
    categories: state.category.categorylist,
    end: state.category.end,
    selected: state.category.selected,
  }
}

export default connect(mapStateToProps, {getCategoryList, getProductList})(Categories)

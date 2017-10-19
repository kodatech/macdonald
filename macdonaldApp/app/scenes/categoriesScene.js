import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { getCategoryList } from '../actions'

/** This is a description of the ProductScene class. */
class CategoriesScene extends Component {

  /**
 * Represents state.
 * @constructor
 * @param {string} props - The title of the book.
 */
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  /**
  *This is a description of the componentWillMount function.
  */
  componentWillMount() {
    this.props.getCategoryList(0)
    this.createDataSource(this.props)
  }

  /**
  *This is a description of the componentWillMount function.
  * @param {object} nextProps - The title of the book.
  */
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  /**
  *This is a description of the createDataSource function.
  * @param {object} categories - The title of the book.
  */
  createDataSource({ categories }) {
    console.log(categories)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.dataSource = ds.cloneWithRows(categories)
  }

  /**
  *This is a description of the componentDidMount function.
  *@return {ListView} dataSource - The title of the book.
  */

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
          renderRow={(rowData) => <Text>{rowData.name}, {rowData.id}, {rowData.parent_id}</Text>}
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
  console.log(state)
  return {
    loadingCategories: state.category.loading,
    categories: state.category.categorylist,
  }
}

export default connect(mapStateToProps, {getCategoryList})(CategoriesScene)

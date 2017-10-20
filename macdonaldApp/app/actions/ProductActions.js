import {
  GET_PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
  CLEAR_PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
} from './types'

export const selectImageName = (name) => {
  return (dispatch) => {
    
  }
}

export const getProductList = (idCategory, idProduct) => {
  return (dispatch, getState) => {
    dispatch({type: GET_PRODUCT_LIST})
    if (idCategory === undefined) {
      idCategory = 'All'
    }
    let url = `http://macdonald.benjamin.sky/endpoint/services-product.json?field_category_tid=${idCategory}&field_product_code_value=${idProduct}`
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          console.log(responseJson[0])
          imageProductProcess(responseJson).then((ret) =>
            // console.log(ret),
            dispatch({
              type: PRODUCT_LIST_SUCCESS,
              payload: responseJson,
              // idCategory: idCategory,
            })
          )
        }
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_LIST_FAIL,
        })
        if (error) {
          console.log('PRODUCT_LIST_SUCCESS', error)
        }
      })
  }
}

const imageProductProcess = async (products) => {
  // return new Promise((resolve, reject) => {
  //   let ret = []
  //   products.forEach(function(element) {
  //     element.Code = element.Code + 'test'
  //     ret.push(element)
  //     console.log(element)
  //   })
  // })
  console.log(products)
  let ret = []
  products.forEach(function(element) {
    // let pos0 = element.field_product_image[0].indexOf('files/')
    // let pos1 = element.field_product_image[0].indexOf('width=')
    // element.field_product_image[0] = element.field_product_image[0].substring(pos0 + 6, pos1 - 2)
    // console.log(element.field_product_image)
    let images = element.Images
    for (let i = 0; i < images.length; i++) {
      let pos0 = element.Images[i].indexOf('files/')
      let pos1 = element.Images[i].indexOf('width=')
      element.Images[i] = element.Images[i].substring(pos0 + 6, pos1 - 2)
      // element.img[i] = require(`../../resources/macDonaldProductImages/${element.field_product_image[i].substring(pos0 + 6, pos1 - 2)}`)
      // let img = require(`../../resources/macDonaldProductImages/${rowData.field_product_image[0]}`)
    }
    ret.push(element)

    // console.log(element)
  })
  return ret
}

import {
  GET_CATEGORY_LIST,
  CATEGORY_LIST_SUCCESS,
  CLEAR_CATEGORY_LIST,
  CATEGORY_LIST_FAIL,
  GET_CATEGORY_FIRST_LEVEL,
  NO_MORE_CATEGORIES,
} from './types'
export const getCategoryList = (id, parentId) => {
  return (dispatch, getState) => {
    dispatch({type: GET_CATEGORY_LIST})
    if (id === '0') {
      dispatch({
        type: GET_CATEGORY_FIRST_LEVEL,
        payload: [{id: '1', name: 'Washroom Products', parent_id: '0'}, {id: '13', name: 'Water Control Products', parent_id: '0'}, {id: '19', name: 'Commercial Products', parent_id: '0'}],
        end: false,
      })
    } else {
      let url = `http://macdonald.benjamin.sky/endpoint/services-menu.json?tid_raw_1=${id}`
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson)
          if (responseJson.length > 0) {
            responseJson.unshift({id: '0', name: 'Main Menu', parent_id: '0'})
            dispatch({
              type: CATEGORY_LIST_SUCCESS,
              payload: responseJson,
              end: false,
              selected: id,
            })
          } else {
            let url = `http://macdonald.benjamin.sky/endpoint/services-menu.json?tid_raw_1=${parentId}`
            fetch(url)
              .then((response) => response.json())
              .then((responseJson) => {
                responseJson.unshift({id: '0', name: 'Main Menu', parent_id: '0'})
                dispatch({
                  type: NO_MORE_CATEGORIES,
                  payload: responseJson,
                  end: true,
                  selected: id,
                })

              })

          }
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_LIST_FAIL,
          })
          if (error) {
            console.log('GET_CATEGORY_LIST', error)
          }
        })
    }
  }
}

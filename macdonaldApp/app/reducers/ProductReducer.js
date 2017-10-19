import {
  GET_PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
  CLEAR_PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
} from '../actions/types'

const INITIAL_STATE = {
  productlist: [],
  loading: true,
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  // console.log(action)
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, loading: true, error: '' }
    case PRODUCT_LIST_SUCCESS:
      return { ...state, productlist: action.payload, loading: false, error: '' /* idCategory: action.idCategory */ }
    case PRODUCT_LIST_FAIL:
      return { ...state, productlist: [], loading: false, error: 'Could not load the information' }
    case CLEAR_PRODUCT_LIST:
      return { ...state, productlist: [], loading: false, error: '' }
    default:
      return state
  }
}

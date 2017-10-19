import { combineReducers } from 'redux'
import CategoryReducer from './CategoryReducer'
import ProductReducer from './ProductReducer'

export default combineReducers({
  category: CategoryReducer,
  product: ProductReducer,
})

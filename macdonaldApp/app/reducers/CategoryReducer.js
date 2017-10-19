import {
  GET_CATEGORY_LIST,
  CATEGORY_LIST_SUCCESS,
  CLEAR_CATEGORY_LIST,
  CATEGORY_LIST_FAIL,
  GET_CATEGORY_FIRST_LEVEL,
  NO_MORE_CATEGORIES,
} from '../actions/types'

const INITIAL_STATE = {
  categorylist: [],
  loading: true,
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  // console.log(action)
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return { ...state, loading: true, error: '' }
    case CATEGORY_LIST_SUCCESS:
      return { ...state, categorylist: action.payload, loading: false, end: action.end, error: '', selected: action.selected }
    case CATEGORY_LIST_FAIL:
      return { ...state, categorylist: [], loading: false, error: 'Could not load the information' }
    case CLEAR_CATEGORY_LIST:
      return { ...state, categorylist: [], loading: false, error: '' }
    case GET_CATEGORY_FIRST_LEVEL:
      return { ...state, categorylist: action.payload, loading: false, end: action.end, error: '' }
    case NO_MORE_CATEGORIES:
      return { ...state, categorylist: action.payload, loading: false, end: action.end, error: '', selected: action.selected }
    default:
      return state
  }
}

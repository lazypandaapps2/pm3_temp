import { SET_THEME, SET_THEME_TYPE } from '../Constants'

const initialState = {
  theme: 'light',
  theme_type: 'system_default'
}

export default (state = initialState, { type, payload }) => {
  console.log('themeReducer', type, payload)
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload
      }
    case SET_THEME_TYPE:
      return {
        ...state,
        theme_type: payload
      }
    default:
      return state
  }
}

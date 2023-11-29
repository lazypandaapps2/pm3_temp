import {SET_THEME, SET_THEME_TYPE } from '../Constants'


export const setTheme = (payload) => ({
  type: SET_THEME,
  payload
})

export const setThemeType = (payload) => ({
  type: SET_THEME_TYPE,
  payload
})


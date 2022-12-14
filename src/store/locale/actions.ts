import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { Dispatch } from 'react'
import { initReactI18next } from 'react-i18next'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import SupportedLocales from '../../scripts/SupportedLocales'
import { AppState } from '../configureStore'
import * as gb from './resources/gb.json'
import * as jp from './resources/jp.json'
import * as ua from './resources/ua.json'
import { AppActions, Locale } from './types'

type ThunkLocaleAction = ThunkAction<void, AppState, unknown, Action<string>>

const onLanguageChange = (t) => {
  document.title = t('business-card-title')
}

export const loadLocale = (payload: Locale): AppActions => ({
  type: 'LOAD_LOCALE',
  payload
})

export const startLoadLocale = (): ThunkLocaleAction =>
  async (dispatch: Dispatch<AppActions>) => {
    const params = new URLSearchParams(document.location.search)
    const code: string = params.get('locale') || localStorage.getItem('i18nextLng')
    const currentLocale = SupportedLocales.getOrDefault(code)
    if (document.location.search) {
      window.history.replaceState(
        {},
        document.title,
        document.location.origin + document.location.pathname + document.location.hash
      )
    }
    await i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        debug: process.env.NODE_ENV === 'development',
        defaultNS: 'common',
        fallbackLng: SupportedLocales.default.code,
        lng: currentLocale.code,
        ns: ['common'],
        resources: {
          gb: { common: gb },
          jp: { common: jp },
          ua: { common: ua }
        }
      }).then((t) => {
        onLanguageChange(t)
        dispatch(
          loadLocale({
            ...currentLocale
          })
        )
      })
  }

export const setLocale = (payload: Locale): AppActions => ({
  type: 'SET_LOCALE',
  payload
})

export const startSetLocale = (locale: Locale): ThunkLocaleAction =>
  (dispatch: Dispatch<AppActions>) => {
    i18n.changeLanguage(locale.code, (err, t) => {
      onLanguageChange(t)
      dispatch(
        setLocale({
          ...locale
        })
      )
    })
  }

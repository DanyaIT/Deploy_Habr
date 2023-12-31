import { createContext } from 'react'

export enum Theme {
  DARK = 'app_dark_theme',
  NORMAL = 'app_normal_theme',
  BLUE = 'app_blue_theme'
}

export interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void,
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

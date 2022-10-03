import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ResetStyle, GlobalStyle, themeStyle } from '../../styled'
import { useToggle } from '../../hooks'
import Form from '../Form'
import StyledApp from './App.styled'

export const App = () => {
  const [isDarkMode, toggleTheme] = useToggle()

  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={isDarkMode ? themeStyle.dark : themeStyle.light}>
        <GlobalStyle />
        <StyledApp>
          <Form
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          >
          </Form>
        </StyledApp>
      </ThemeProvider>
    </>
  )
}

export default App

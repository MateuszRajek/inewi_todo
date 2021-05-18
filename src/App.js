/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import TodosList from './Components/TodosList'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodosList />
    </ThemeProvider>
      
  );
}

export default App;

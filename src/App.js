/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import MainView from './Components/MainView';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
      
  );
}

export default App;

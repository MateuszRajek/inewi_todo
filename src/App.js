/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import MainView from './Components/MainView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from './theme'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route>
            <MainView exact path='/'/>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>    
  );
}

export default App;

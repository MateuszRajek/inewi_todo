/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import MainView from './Components/MainView';
import StatsView from './Components/StatsView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from './theme'

function App() {
  return (
      <Router>
        <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/'>
            <MainView />
           </Route>
           <Route exact path='/stats'>
             <StatsView />
          </Route>
        </Switch>
        </ThemeProvider>  
      </Router> 
  );
}

export default App;

/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import MainView from './Components/MainView';
import StatsView from './Components/StatsView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainView />
           </Route>
           <Route exact path='/stats'>
             <StatsView />
          </Route>
        </Switch>
      </Router> 
    </ThemeProvider>  
  );
}

export default App;

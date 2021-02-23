
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogInPage from './AuthenPage/LogIn';
import Home from './Home';
import RegisterPage from './AuthenPage/Register';
import PersonalRegister from './AuthenPage/PersonalRegister';
import CompanyRegister from './AuthenPage/CompanyRegister';

export default function App(){
  return (
  <Router>
  <Switch>
      <Route  path='/' exact component={Home}></Route>
        <Route path='/login' component={LogInPage}/>
        <Route path='/register' exact component={RegisterPage}>
            <Route path='/personal' component={PersonalRegister}/>
            <Route path='/company' component={CompanyRegister}/>
        </Route>
  </Switch>
  </Router>
  )
}

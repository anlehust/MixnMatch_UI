import {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonalRegister from './PersonalRegister';
import CompanyRegister from './CompanyRegister'

export default class RegisterPage extends Component{
    render(){
        return(
        <Router>
            <div>
                <a href='/register/personal'>Cá nhân</a>
                <a href='/register/company'>Tổ chức</a>
                
            </div>
        </Router>
        )
    }
}
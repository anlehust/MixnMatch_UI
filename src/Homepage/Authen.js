import { Component } from "react";
import '../StyleSheet/Homepage.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import LogInPage from "../AuthenPage/LogIn";

export default class Authen extends Component{
    render(){
        return(
                    <div id='authen'><a href='/register'>Đăng kí</a>| <a href='/login'>Đăng nhập</a></div>
         );
    }
}
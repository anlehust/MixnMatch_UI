import { Component } from "react";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import Authen from "./Authen";
import '../StyleSheet/Homepage.css';

export default class Header extends Component{
    render(){
        return(
            <div className='header-bar'>
            <Logo></Logo>
            <Searchbox></Searchbox>
            <Authen></Authen>
            </div>
        )
    }
}
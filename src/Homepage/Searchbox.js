import { Component } from "react";
import '../StyleSheet/Homepage.css';
import {SearchOutlined} from '@ant-design/icons';

export default class Searchbox extends Component{
    render(){
        return(
            <div className = 'search-bar'>
            <SearchOutlined id = 'logo-search'/>
            <input id="searchbox" placeholder="Tim kiem"></input>
            </div>
        );
    }
}
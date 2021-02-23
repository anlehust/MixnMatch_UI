import { Component } from "react";

import '../StyleSheet/Footer.css'

export default class Footer extends Component{
    render(){
        return (
        <div id = 'footer'>
            <div id = 'left-footer'>
                <p> MIX AND MATCH </p>
                <div><p> Công ty: Mix and Match Corporation</p></div>
                <div><p> Địa chỉ: </p></div>
                <div><p> Email: </p></div>
                <div><p> Hotline: </p></div>
            </div>
            <div id = 'right-footer'></div>
        </div>);
    }
}